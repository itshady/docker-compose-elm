module Camps exposing (..)

import Bootstrap.Card as Card
import Bootstrap.Card.Block as Block
import Bootstrap.Grid as Grid
import Bootstrap.Grid.Col as Col
import Bootstrap.Grid.Row as Row
import Bootstrap.Utilities.Spacing as Spacing
import Html exposing (..)
import Html.Attributes exposing (..)
import List 
import Tuple

import GraphicSVG as GSVG 
import GraphicSVG.Widget as Widget

import Tabs
import Parameters
import Utils exposing (escapeUrl,Link,Description,BulletPoint,ButtonFace,PreHtml(..))


{-
Helpful Scripts:

Converting poster to png (assuming you have installed imagemagick)

/opt/homebrew/Cellar/imagemagick/7.0.11-7/bin/convert -alpha off -resize 213x275 AdventureGameAd2021.pdf AdventureGameAd2021.png

regex to make needed png/pdf pairs
(.*\.pdf) (.*\.png)
("img/$2","img/$1")


-}

-- Tabs depends on view state to keep track of the active Tab, you'll need to store that in your model


type alias Model =
    { tab : Parameters.Tabs
    , widget : Widget.Model
    }



-- Provide the initialState for the Tabs control

tabWidth = 15
widgetWidth = tabWidth * toFloat (2 + List.length Parameters.allCamps)
widgetHeight = 30
init : ( Model, Cmd Msg)
init =
    let
        (wState, wCmd) = Widget.init widgetWidth widgetHeight "tabBar"
    in 
    (   { tab = Parameters.Animation
        , widget = wState
        }
    , Cmd.map WidgetMsg wCmd )


--  To step the state forward for the Tabs control we need to have a Message

setTab model tab = { model | tab = tab }

type Msg
    = WidgetMsg Widget.Msg
    | TabMsg Parameters.Tabs

update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
    case msg of
        WidgetMsg wMsg ->
            let
                (newWState, wCmd) = Widget.update wMsg model.widget
            in
                ({ model | widget = newWState }
                , Cmd.map WidgetMsg wCmd) 
        TabMsg tab ->
            ( { model | tab = tab }, Cmd.none )

page : Model -> List (Html Msg)
page model =
    let
        tabs = List.indexedMap 
                                ( \ idx tab ->
                                        ( model.tab == tab
                                        , tabButton (model.tab == tab) tab 
                                            |> GSVG.move ((1.5 + toFloat idx) * tabWidth - (0.5 * widgetWidth),-3)
                                        )
                                )
                                Parameters.allCamps
    in  
    
        [ Html.div [style "display" "flex", style "flex-direction" "row"]
                [ Html.div [style "width" "100%"] -- change the width of the icon
                    [
                        Widget.view model.widget
                            (
                                (List.filterMap isNotSelected tabs)
                                ++
                                (List.filterMap isSelected tabs)
                            )
                    ]
                ]
        , case model.tab of
            Parameters.Animation -> tabItem model.tab ("Animation", "Animation Camp", camps model.tab animation)
            Parameters.Comics  -> tabItem model.tab ("Comics", "Comics Camp", camps model.tab comicsCamp)
            Parameters.Adventure  -> tabItem model.tab ("Adventure", "Adventure Camp", camps model.tab adventure)
            Parameters.Mini  -> tabItem model.tab ("Mini-Games", "Mini-Games Camp", camps model.tab miniGames)
            Parameters.ThreeD  -> tabItem model.tab ("3D", "Journey into 3D", camps model.tab journyIntoThreeD)
            Parameters.Vaccine  -> tabItem model.tab ("DT", "Design Thinking Camp", camps model.tab designThinkingCamp)
            Parameters.Sustainability  -> tabItem model.tab ("DT", "Design Thinking Camp", camps model.tab designThinkingCamp)
            Parameters.Picasso  -> tabItem model.tab ("Picasso", "Code like Picasso", camps model.tab codeLikePicasso)
            Parameters.Escher  -> tabItem model.tab ("Escher", "Code like Escher", camps model.tab codeWeaver)
            Parameters.Beethoven  -> tabItem model.tab ("Beethoven", "Code like Beethoven", camps model.tab codeLikeBeethoven)
            Parameters.MiniSaturdays  -> tabItem model.tab ("Mini-Sat", "Mini-Games Saturdays", camps model.tab miniGamesSaturdays)
                -- , tabItem("Rube Goldberg", camps model.tab rubeGoldberg)
        ]

isNotSelected (flag,x) = if flag then Nothing else Just x 
isSelected (flat,x) = if flat then Just x else Nothing 

tabButton selectedTab thisTab =
    let
        f = if selectedTab then
                Tabs.tippedPaint GSVG.grey
            else
                Tabs.uprightPaint GSVG.grey
    in  
        f (TabMsg thisTab,(Parameters.gsvgColor thisTab),Parameters.name thisTab)
        

mailto : (String,List PreHtml) -> String 
mailto (subject,preUrl) =
    [ "mailto:?subject="
    , escapeUrl subject
    , "&body="
    ] 
    ++  (   List.concatMap 
                ( \ e -> case e of
                            PreTxt txt -> [escapeUrl txt,"%0A%0A"] 
                            PreLink link -> [escapeUrl link,"%0A"]
                )
                preUrl
        )
    |> String.concat 

type alias CampInfo =
    { campName : String
    , whatToExpect : List (Description,Link)
    , learningObjectives : List (BulletPoint,Link)
    , exampleHeader : String
    , exampleLinks : List (ButtonFace, Link)
    , timing : List (BulletPoint, Link)
    , fb : Link
    , insta : Link
    , tweet : Link
    , email : (String,List PreHtml)
    , poster : (ButtonFace,Link) 
    , requires : List (ButtonFace,Link)    
    }
camps : Parameters.Tabs -> CampInfo -> Html msg
camps tab info = 
    Grid.containerFluid [] -- [style "background-color" (htmColor tab)]
        [ Grid.row [ Row.centerLg, Row.attrs [ class "ml0 mr0 w100" ] ]
            [ Grid.col [ Col.md3] <|
                [ div [style "margin-top" "30px", style "margin-bottom" "6px", style "font-weight" "700", style "font-size" "18pt"] [text "Click to book:"]
                , case tab of
                    Parameters.MiniSaturdays -> 
                        a [ target "_blank", href "https://www.eng.mcmaster.ca/forms/mcmaster-start-coding-camp-2021" ] [ text "Camp Store" ]
                    _ -> ul [style "font-weight" "700", style "font-size" "18pt"] (List.filter ( \ (_,theTab) -> theTab == tab) (Parameters.campList) 
                            |> List.map Parameters.campDates
                            |> List.map ( \ dates -> li [] [a [ target "_blank", href "https://www.eng.mcmaster.ca/forms/mcmaster-start-coding-camp-2021" ] [ text dates ]] )) -- FIXME need to add hub link
                , div [style "margin-top" "30px", style "font-weight" "700", style "font-size" "18pt"] [text "Click for poster:"]
                , Card.config [ Card.attrs [style "margin-top" "6px"]]
                    |> Card.block []
                        [ Block.custom (
                            a   [ target "_blank", href (Tuple.second info.poster) ] 
                                [ img [ style "width" "100%", style "maxWidth" "150px", src (Tuple.first info.poster)  ] [] ]
                        )
                        ]
                    |> Card.view 
                , a [ target "_blank", href info.fb ] [ img [ style "width" "40px", src "img/facebook-logo.png" ] [] ]
                , a [ target "_blank", href info.tweet ] [ img [ style "width" "40px", src "img/twitter.png" ] [] ]
                , a [ href (mailto info.email)] [ img [ style "width" "30px", src "img/mail-outline-filled.png" ] [] ]
                , a [ target "_blank", href (Tuple.second info.poster)] [ img [ style "width" "30px", src "img/pdfDownload.png" ] [] ]
                ]

            , Grid.col [ Col.md6 ]
                [ Card.config [ Card.attrs [style "margin-top" "6px"]]
                    |> Card.block []
                        [ heading "What to expect during the camp"
                                                , listBody info.whatToExpect
                                                , heading "Learning objectives"
                                                , listBody info.learningObjectives
                                                , heading "Communication"
                                                , listBody [("email with confirmation of registration","")
                                                            ,("information on registering for one free lesson (per camp)","")
                                                            ,("email with Zoom link Thursday before the camp","")
                                                            ,("daily email update with your child's progress","")]
                                                , heading "Timing"
                                                , listBody info.timing
                                                , heading "Requirements"
                                                , listBody ( info.requires ++ [("computer/laptop/chromebook with Chrome browser installed and microphone","")
                                                            ,("iPad with keyboard","")
                                                            ,("Zoom client optional","")])
                        ]
                    |> Card.view
                ]

            , Grid.col [Col.attrs [Spacing.p0Lg]] 
                [ Card.config [ Card.attrs [style "margin-top" "6px"]]
                    |> Card.block []
                        ( Block.text [style "font-weight" "700"] [text info.exampleHeader]
                        :: List.concatMap ( \ (face,link) -> 
                            [ Block.custom (
                                    a   [ target "_blank", href link ] 
                                        [ img [ style "width" "100%", style "maxWidth" "300px", src face  ] [] ]
                                )
                            , Block.custom ( p [] [] )
                            ]
                        )
                            info.exampleLinks
                        )
                    |> Card.view
                ]
            ]
        ]

comicsCamp: CampInfo
comicsCamp = { campName = "Dynamic Comics"
                , whatToExpect= [("You will work in a team of six to tell your story through comics.","")
                    , ("You will learn about narrative and story-boarding from a professional storyteller.","")
                    , ("You will use colour to set the mood, and animation to add excitement.","")
                ]
                , learningObjectives= [(" Learn to use storyboarding ","")
                                , ("Learn to write a script","") 
                                , ("Apply animation knowledge to moving characters","")
                                , ("Learn techniques to harness creativity from brainstorming to the final product","")
                                , ("Develop soft skills such as communication, presenting, and team management","")
                            ]
                , exampleHeader = "Click for last year's creations:"
                , exampleLinks = [("img/Alearicia.png","https://macoutreach.rocks/comic/Alearicia")
                                ,("img/SeaSerpent.png","https://macoutreach.rocks/comic/seaSerpent")
                                ]
                , timing =  [("Monday-Friday","")
                            ,("10am-noon: coding+","")
                            ,("noon-1pm: lunch break","")
                            ,("1pm-3pm: coding+","")
                            ,("3pm-4pm: exercise break","")
                            ,("4pm-6pm: coding+","")]
                , fb = "https://www.facebook.com/McmasterStartcoding"
                , insta = ""
                , requires = [("Lessons 1,2,3,4,5","#lessons")]
                , tweet = "https://twitter.com/maccsoutreach"
                , email =   ("McMaster Start Coding Comics Camp"
                            ,   [PreTxt "Check out McMaster Start Coding’s Comics Camp! An awesome opportunity that connects storytelling with coding for students grade 5-8!"
                                ,PreLink "http://outreach.mcmaster.ca#comics"]
                            )
                , poster = ("img/DynamicComicsAd2021.png","img/DynamicComicsAd2021.pdf")
                }

animation: CampInfo
animation =  { campName = "Animation"
                , whatToExpect= [
                    ("You will work in a team of six to tell a story through animation.","")
                    , ("You will pitch your theme and story ideas and come up with an action plan together.","")
                    , ("You will learn new tools for making complex shapes.","")
                    , ("You will learn new functions to create multi-part animations.","")
                ]
                , learningObjectives= [
                            ("Apply transformations to shapes","")
                            , ("Use (x,y) coordinates in animations","")
                            , ("Master colour theory using red-green-blue and hue-saturation-lightness colour spaces","")
                            , ("Master sin and cos in wave animations","")
                            , ("Develop soft skills such as communication, presenting, and team management","")
                             ]
                , exampleHeader = "Click for last year's creations:"
                , exampleLinks = [("img/Pyramid.png","https://macoutreach.rocks/share/e2994660")
                                ,("img/chrysalis.png","https://macoutreach.rocks/share/e07bfafe")]
                , timing =  [("Monday-Friday (except Aug 4-7)","")
                            ,("Tuesday-Saturday (Aug 4-7)","")
                            ,("10am-noon: coding+","")
                            ,("noon-1pm: lunch break","")
                            ,("1pm-3pm: coding+","")
                            ,("3pm-4pm: exercise break","")
                            ,("4pm-6pm: coding+","")]
                , fb = "https://www.facebook.com/McmasterStartcoding"
                , insta = ""
                , requires = [("lessons 1,2,3,4,5","#lessons")]
                , tweet = "https://twitter.com/maccsoutreach"
                , email =   ("McMaster Start Coding Animation Camp"
                            ,   [PreTxt "Check out McMaster Start Coding’s Animations Camp! A great opportunity where students, grades 5-8, will learn to code flowers blooming, hummingbirds flying, rockets blasting off, and more! Students will be able to imagine scenes and code them to life!"
                                ,PreLink "http://outreach.mcmaster.ca#animation"]
                            )
                , poster = ("img/AnimationsCampAd2021.png","img/AnimationsCampAd2021.pdf")
                }

adventure: CampInfo
adventure = {
                campName = "Adventure"
                , whatToExpect= [
                     ("You will work in a team of six to create an adventure game.","")
                    , ("You will learn to create a game map.","")
                    , ("You will learn to add buttons to move through the game map.","")
                ]
                , learningObjectives= [
                     ("Learn to use design thinking to identify a game premise","")
                    , ("Learn about state diagrams and use them to plan game logic","")
                    , ("Develop soft skills such as communication, presenting, and team management","")
                             ]
                , exampleHeader = "Click for examples:"
                , exampleLinks = [("img/Cassiopeian.png","https://macoutreach.rocks/share/c0e66535")] 
                , timing =  [("Monday-Friday (except Aug 4-7)","")
                            ,("Tuesday-Satruday (Aug 4-7)","")
                            ,("10am-noon: coding+","")
                            ,("noon-1pm: lunch break","")
                            ,("1pm-3pm: coding+","")
                            ,("3pm-4pm: exercise break","")
                            ,("4pm-6pm: coding+","")]
                , fb = "https://www.facebook.com/McmasterStartcoding"
                , insta = ""
                , requires = [("lessons 1,2,3,4,5,8","#lessons")]
                , tweet = "https://twitter.com/maccsoutreach"
                , email =   ("McMaster Start Coding Camps"
                            ,   [PreTxt "Check out McMaster Start Coding’s summer camp! A great opportunity where students, grades 5-8, will learn to code!"
                                ,PreLink "http://outreach.mcmaster.ca#camps"]
                            )
                , poster = ("img/AdventureGameAd2021.png","img/AdventureGameAd2021.pdf")
            }

miniGames: CampInfo
miniGames = {
                campName = "Mini-Games"
                , whatToExpect= [
                   ("You will work in a team of six to create mini-games.","")
                    , ("You will learn to use controls such as arrow keys and drag-and-drop.","")
                    , ("If you already made an adventure game, you will be able to incorporate your mini game.","")
                ]
                , learningObjectives= [
                 ("Learn to use design thinking to identify a mini-game premise","")
                , ("Learn to use state variables to track score, position, etc.","")
                , ("Learn to use advanced data structures like lists to track multiple objects","")
                , ("Develop soft skills such as communication, presenting, and team management","")
                             ]
                , exampleHeader = "Click for 2019 example:"
                , exampleLinks = [("img/EscapeMathIslandLogs.png","https://macoutreach.rocks/escapemathisland/")]
                , timing =  [("Monday-Friday","")
                            ,("10am-noon: coding+","")
                            ,("noon-1pm: lunch break","")
                            ,("1pm-3pm: coding+","")
                            ,("3pm-4pm: exercise break","")
                            ,("4pm-6pm: coding+","")]
                , fb = "https://www.facebook.com/McmasterStartcoding"
                , insta = ""
                , requires = [("lessons 1,2,3,4,5,8,9","#lessons")]
                , tweet = "https://twitter.com/maccsoutreach"
                , email =   ("McMaster Start Coding Camps"
                            ,   [PreTxt "Check out McMaster Start Coding’s summer camp! A great opportunity where students, grades 5-8, will learn to code!"
                                ,PreLink "http://outreach.mcmaster.ca#camps"]
                            )
                , poster = ("img/Mini-GamesAd2021.png","img/Mini-GamesAd2021.pdf")
            }

miniGamesSaturdays: CampInfo
miniGamesSaturdays = {
                campName = "Mini-Games Saturdays"
                , whatToExpect= [
                   ("You will work alone or in a team of two or three to create a mini-game starting from a template.","")
                    , ("Three different game mechanics will be covered.","")
                    , ("Arrow keys to move around a maze with prizes, traps and trap doors. (May 22nd and June 2nd)","")
                    , ("Clicking to kick a ball against an AI opponent. (May 29th and June 19th)","")
                    , ("Arrow keys to move left and right to catch falling objects. (June 5th and 26th)","")
                    , ("If you attend multiple times, you will be able to refine your game and add more difficult mechanics.","")
                    , ("If you attend the Adventure or Mini-Games week-long camps, you will be able to incorporate multiple mini-games into an adventure game, and work on a bigger project with a team.","")
                ]
                , learningObjectives= [
                  ("Learn to use state variables to track score, position, etc.","")
                , ("Learn to use advanced data structures like lists to track multiple objects","")
                             ]
                , exampleHeader = "5 Examples in 1"
                , exampleLinks = [("img/EscapeMathIslandLogs.png","https://macoutreach.rocks/escapemathisland/")]
                , timing =  [("Saturdays May 22 - June 26","")
                            ,("10am-noon: step-by-step to a working game, deciding on a theme","")
                            ,("noon-1pm: lunch break","")
                            ,("1pm-3:30pm: coding","")
                            ,("3:30pm-4pm: final presentations","")]
                , fb = "https://www.facebook.com/McmasterStartcoding"
                , insta = ""
                , requires = [("lessons 1,2,3,4,5","#lessons")]
                , tweet = "https://twitter.com/maccsoutreach"
                , email =   ("McMaster Start Coding Camps"
                            ,   [PreTxt "Check out McMaster Start Coding’s summer camp! A great opportunity where students, grades 5-8, will learn to code!"
                                ,PreLink "http://outreach.mcmaster.ca#camps"]
                            )
                , poster = ("img/SaturdayMini-GamesPoster2021.png","img/SaturdayMini-GamesPoster2021.pdf")
            }

journyIntoThreeD: CampInfo
journyIntoThreeD = {
                campName = "Journey into 3D"
                , whatToExpect= [
                  ("You will work in one big team to plan and create a coral reef in 3D.","")
                , ("You will learn to create 3D objects and give them textures.","")
                , ("You will swim around the 3D world.","")
                ]
                , learningObjectives= [
               ("Transfer knowledge of shapes, coordinates and transformations from 2D to 3D","")
                , ("Learn to create complex animations, e.g. seaweed swaying","")
                , ("Develop soft skills such as communication, presenting, and team management in the context of a larger team","")
                             ]
                , exampleHeader = "Click for examples (use WASD-Shift-Space):"
                , exampleLinks = [("img/b52e13daBee.png", "https://macoutreach.rocks/share/b52e13da")
                                  , ("img/152bc746Bee.png", "https://macoutreach.rocks/share/152bc746")
                                  , ("img/e15b16dbBee.png", "https://macoutreach.rocks/share/e15b16db")]
                , timing =  [("Monday-Friday","")
                            ,("10am-noon: coding+","")
                            ,("noon-1pm: lunch break","")
                            ,("1pm-3pm: coding+","")
                            ,("3pm-4pm: exercise break","")
                            ,("4pm-6pm: coding+","")]
                , fb = "https://www.facebook.com/McmasterStartcoding"
                , insta = ""
                , requires = [("lessons 1,2,3,4,5","#lessons")]
                , tweet = "https://twitter.com/maccsoutreach"
                , email =   ("McMaster Start Coding's Journey into 3D"
                            ,   [PreTxt "Check out McMaster Start Coding’s 3D Camp! An incredible opportunity to learn how to code interactive 3D games for students grades 5-8!"
                                ,PreLink "http://outreach.mcmaster.ca#3d"]
                            )
                , poster = ("img/Journeyinto3DAd2021.png","img/Journeyinto3DAd2021.pdf")
                }

designThinkingCamp: CampInfo
designThinkingCamp = {
                campName = "Design Thinking camp"
                , whatToExpect= [
                   ("You will work in a team of four to apply Design Thinking to a real-life problem.","")
                    , ("You will learn research skills, including how to locate sources and evaluate them for reliability.","")
                    , ("You will learn to use empathy maps to see a problem through the eyes of your user.","")
                    , ("You will learn to collect feedback and formulate an action plan to improve your product.","")
                ]
                , learningObjectives= [
                    ("Learn key methods of Design Thinking (a part of human-centred design): understanding the user, ideation, problem framing, option ranking, prototyping, and feedback elicitation","")
                    , ("Develop soft skills such as communication, team and project management","")
                             ]
                , exampleHeader = "Herograms were invented at our first Virtual Designathon (Learning in a Pandemic). Click for animations."
                , exampleLinks = [("img/d48060faHero.png","https://macoutreach.rocks/share/d48060fa")
                                ,("img/304cdecdHero.png","https://macoutreach.rocks/share/304cdecd")
                                ,("img/017c126eHero.png","https://macoutreach.rocks/share/017c126e")
                                ,("img/4ac9622bHero.png","https://macoutreach.rocks/share/4ac9622b")
                                ,("img/dd193df7Hero.png","https://macoutreach.rocks/share/dd193df7")]
                , timing =  [("Monday-Friday","")
                            ,("10am-noon: coding+","")
                            ,("noon-1pm: lunch break","")
                            ,("1pm-3pm: coding+","")
                            ,("3pm-4pm: exercise break","")
                            ,("4pm-6pm: coding+","")]
                , fb = "https://www.facebook.com/McmasterStartcoding"
                , insta = ""
                , requires = [("lessons 1,2,3,4","#lessons")]
                , tweet = "https://twitter.com/maccsoutreach"
                , email =   ("McMaster Start Coding Camps"
                            ,   [PreTxt "Check out McMaster Start Coding’s summer camp! A great opportunity where students, grades 5-8, will learn to code!"
                                ,PreLink "http://outreach.mcmaster.ca#camps"]
                            )
                , poster = ("img/DesignThinkingAd2021.png","img/DesignThinkingAd2021.pdf")
                    }

codeWeaver: CampInfo
codeWeaver ={
                campName = "Code like Escher"
                , whatToExpect= [
                   ("You will create your own animated kaleidoscope.","")
                    , ("You will create a snowflake, leaf, and branching tree just like in animated movies.","")
                    , ("You will work individually or in a team to create a complex image using the repeated transformations have learned.","")
                ]
                , learningObjectives= [
                  ("Transformation groups","") 
                , ("Symmetry","") 
                , ("Tesselations","") 
                , ("Escher's use of symmetry","https://www.wikiart.org/en/m-c-escher")
                , ("Fractals","https://en.wikipedia.org/wiki/Fractal_art")
                             ]
                , exampleHeader = "Click for examples:"
                , exampleLinks = [("img/AaidaDragon.png","https://macoutreach.rocks/share/c5e433ce")
                                ,("img/AmrDragon.png","https://macoutreach.rocks/share/3d717b34")
                                ,("img/GurleenTriangles.png","https://macoutreach.rocks/share/9edc09ac")]
                , timing =  [("Monday-Friday","")
                            ,("10am-noon: coding+","")
                            ,("noon-1pm: lunch break","")
                            ,("1pm-3pm: coding+","")
                            ,("3pm-4pm: exercise break","")
                            ,("4pm-6pm: coding+","")]
                , fb = "https://www.facebook.com/McmasterStartcoding"
                , insta = ""
                , requires = [("lessons 1,2,3,4,5,6,7","#lessons")]
                , tweet = "https://twitter.com/maccsoutreach"
                , email =   ("McMaster Start Coding Camps"
                            ,   [PreTxt "Check out McMaster Start Coding’s summer camp! A great opportunity where students, grades 5-8, will learn to code!"
                                ,PreLink "http://outreach.mcmaster.ca#camps"]
                            )
                , poster = ("img/CodeLikeEscherAd2021.png","img/CodeLikeEscherAd2021.pdf")
            }

codeLikePicasso: CampInfo
codeLikePicasso = {
                campName = "Code like Picasso"
                , whatToExpect= [
              ("You will work individually or in a team to create pictures, animations or even interactions in the style of a famous painting or artist.","")
            , ("You will learn the history of art in half an hour.","")
            , ("You will answer the question: \"What would Picasso do with animations?\" ","")
                ]
                , learningObjectives= [
                                ("Learn how art evolved through time","")
                                , ("Learn to identify important styles of art","")
                                , ("Learn to translate artistic ideas to a digital medium","")
                             ]
                , exampleHeader = "Click for examples:"
                , exampleLinks = [("img/Sharyucasso.png","https://macoutreach.rocks/Sharyucasso.html")
                                ,("img/Debcasso.png","https://macoutreach.rocks/Debcasso.html")
                                ]
                , timing =  [("Monday-Friday","")
                            ,("10am-noon: coding+","")
                            ,("noon-1pm: lunch break","")
                            ,("1pm-3pm: coding+","")
                            ,("3pm-4pm: exercise break","")
                            ,("4pm-6pm: coding+","")]
                , fb = "https://www.facebook.com/McmasterStartcoding"
                , insta = ""
                , requires = [("lessons 1,2,3,4","#lessons")]
                , tweet = "https://twitter.com/maccsoutreach"
                , email =   ("McMaster Start Coding Camps"
                            ,   [PreTxt "Check out McMaster Start Coding’s summer camp! A great opportunity where students, grades 5-8, will learn to code!"
                                ,PreLink "http://outreach.mcmaster.ca#camps"]
                            )
                , poster = ("img/CodeLikePicassoAd2021.png","img/CodeLikePicassoAd2021.pdf")
                    }


codeLikeBeethoven: CampInfo
codeLikeBeethoven = {
                campName = "Code like Beethoven"
                , whatToExpect= [
                     ("You will work in a team of four to create music, lyrics (words) and animations for your own music video.","")
                    , ("You will learn Elm Music, which works just like shapes in 2D graphics.","")
                    , ("You will get advice from a professional musician and composer.","")
                ]
                , learningObjectives= [
                                ("music theory basics aligned with the Ontario curriculum","")
                                , ("rhythm and meter basics","")
                                , ("Elm music programmatic interface","")
                             ]
                , exampleHeader = "Click for sample:"
                , exampleLinks = [("img/Bananana2020.png","https://macoutreach.rocks/Bananana2020.html")]
                , timing =  [("Monday-Friday","")
                            ,("10am-noon: coding+","")
                            ,("noon-1pm: lunch break","")
                            ,("1pm-3pm: coding+","")
                            ,("3pm-4pm: exercise break","")
                            ,("4pm-6pm: coding+","")]
                , fb = "https://www.facebook.com/McmasterStartcoding"
                , insta = ""
                , requires = [("lessons 1,2,3,4","#lessons")]
                , tweet = "https://twitter.com/maccsoutreach"
                , email =   ("McMaster Start Coding Camps"
                            ,   [PreTxt "Check out McMaster Start Coding’s summer camp! A great opportunity where students, grades 5-8, will learn to code!"
                                ,PreLink "http://outreach.mcmaster.ca#camps"]
                            )
                , poster = ("img/CodeLikeBeethovenAd2021.png","img/CodeLikeBeethovenAd2021.pdf")
                    }

rubeGoldberg: CampInfo
rubeGoldberg = {
                campName = "Rube Goldberg"
                , whatToExpect= [
                    ("You will have 30 hours of engaging camp activities.","")
                    , ("You will solve Interesting challenges.","")
                    , ("You will learn about newton force.","")
                    , ("You will play with more physics.","")
                    , ("You will learn about the relation between mass and force.","")
                ]
                , learningObjectives= [
                    ("Use physics slot","")
                   , ("Learn about if...else expression","")
                    , ("Learn about case of function","")
                    , ("Advanced coding skill","")
                             ]
                , exampleHeader = "Click for samples:"
                , exampleLinks = []
                , timing =  [("Monday-Friday","")
                            ,("10am-noon: coding+","")
                            ,("noon-1pm: lunch break","")
                            ,("1pm-3pm: coding+","")
                            ,("3pm-4pm: exercise break","")
                            ,("4pm-6pm: coding+","")]
                , fb = "https://www.facebook.com/McmasterStartcoding"
                , insta = ""
                , requires = [("lessons 1,2,3,4,5","#lessons")]
                , tweet = "https://twitter.com/maccsoutreach"
                , email =   ("McMaster Start Coding Camps"
                            ,   [PreTxt "Check out McMaster Start Coding’s summer camp! A great opportunity where students, grades 5-8, will learn to code!"
                                ,PreLink "http://outreach.mcmaster.ca#camps"]
                            )
                , poster = ("img/dy-comics-ad.png","img/dy-comics-ad.png") 
                }



{-

   threeDGameAdvanced idx =
       let
           campIdx = String.fromInt (idx+1)
       in
            [
                       Block.text [style "font-weight" "700"] [text "About the camp"]
                   ,   Block.text [] [text "In this camp, students will individually work on creating a sports-themed 3D game involving either basketball or badminton."]
                   ,   Block.text [] [text "Badminton"]
                   ,   Block.custom ( ul [] [
                       li [] [text "Students will have to create the racquet and birdie out of various 3D shapes, in addition to implementing mechanics such as hitting the birdie, moving the racquet around, calculating the trajectory movement of the birdie, and so on."]
                   ])
                   ,   Block.text [] [text "Basketball"]
                   ,   Block.custom ( ul [] [
                       li [] [text "Students will create a 3D basketball game where they throw the ball at the net and attempt to score. Students can make the basketball and net, as well as implement mechanics of the game of HORSE, such as throwing the ball, scoring, and so on."]
                   ])
                   ,   Block.text [style "font-weight" "700"] [text "What to do before the camp"]
                   ,   Block.text [] [text "Students are required to have attended lessons 1-9. This camp teaches some more advanced concepts, so coders will be required to attend the Beginner 3D Bee Camp before being invited to attend this camp. As always, mentors will be present to assist students with whatever problems they may have."]
                   ,   Block.text [style "font-weight" "700"] [text "What to expect during the camp"]
                   ,   Block.text [] [text "Students will learn game physics."]
                   ,   Block.text [style "font-weight" "700"] [text "Learning objectives"]
                   , Block.custom (ul [] [
                       li [] [text "Learn more advanced techniques in 3D graphics and animation"]
                     , li [] [text "Learn more advanced techniques in how physical movement works in 3D space"]
                     , li [] [text "Learn how to implement mouse and keyboard controls"]
                   ])
                   ,   Block.text [style "font-weight" "700"] [text "Application requirements"]
                   , Block.custom (ul [] [
                       li [] [text "After successful completion of 3D Bee Camp students will be invited to participate"]
                   ])
                   , Block.custom
                           (
                                links2games "3D Sports Game (Advanced) -- Invite Only" "img/3D-adv-ad.png"
                                [




                                ]

                           )

                   , Block.text [] [ h2 [ Spacing.mt4, Spacing.mb0 ] [ text "Camp Example" ] ]
                   , Block.custom ( div [] [ iframe [ src "https://macoutreach.rocks/share/4459530c", style "width" "100%", style "height" "40vw" ] [] ] )
                   , Block.text [] [ text "Above is an example from the camp, consisting of assets from one of the teams. Shared with permission." ]
                   , Block.text []
                       [ text "Controls: WASD for to rotate ship, Space to fly forwards. "
                       , text "The goal of the game is to repair a satellite and return to the space station. Detailed instructions available ingame."
                       ]
               ]
                       ]
                   }


-}


tabItem active (tabId, name, codeBlock) =  codeBlock

heading str = Block.text [style "font-weight" "700"] [text str]

listBody txtLinks = 
    Block.custom (ul [] ( List.map (\ (txt,link) -> 
                                       if "" == link then
                                         li [] [text txt]
                                       else 
                                         li [] [text txt, div [] [a [target "_blank", href link ] [text link]] ] 
                                   ) txtLinks
                        ))

