module Lessons exposing (..)

import Bootstrap.Card as Card
import Bootstrap.Card.Block as Block
import Bootstrap.Grid as Grid
import Bootstrap.Button as Button
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



type alias Model =
    { tab : Int
    , widget : Widget.Model
    }


-- Provide the initialState for the Tabs control

tabWidth = 15
widgetWidth = tabWidth * toFloat (2 + List.length Parameters.allLessons)
widgetHeight = 30
init : ( Model, Cmd Msg)
init =
    let
        (wState, wCmd) = Widget.init widgetWidth widgetHeight "tabBar"
    in 
    (   { tab = 1
        , widget = wState
        }
    , Cmd.map WidgetMsg wCmd )


--  To step the state forward for the Tabs control we need to have a Message

setTab model tab = { model | tab = if List.member tab Parameters.allLessons then tab else 1 }

type Msg
    = WidgetMsg Widget.Msg
    | TabMsg Int

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
            ( setTab model tab, Cmd.none )

page : Model -> List (Html Msg)
page model =
    let
        tabs = List.indexedMap 
                                ( \ idx tab ->
                                        ( model.tab == tab
                                        , tabButton (model.tab == tab) tab 
                                            |> GSVG.move ((1 + toFloat idx) * tabWidth - (0.5 * widgetWidth),-3)
                                        )
                                )
                                Parameters.allLessons
    in  
        [
        h3[ Spacing.my2 ] [ text "Lessons" ]
        --, a   [ target "_blank", href "img/FreeMcMasterStartCodingIn-ClassLessonsSpring2021.pdf" ] 
        --    [ img [ style "width" "100%", style "maxWidth" "150px", src "img/FreeMcMasterStartCodingIn-ClassLessonsSpring2021.png"  ] [] ]
        -- , 
        , h4 [ Spacing.my1 ] [ text "Class Visits are Booked!  Sign up for waiting/mailing list for future events:" ]
        , a [ target "_blank", href "https://forms.gle/EQdE8yReW1Vf4WxDA" ]
                 [ text "https://forms.gle/EQdE8yReW1Vf4WxDA" ]
        , h4 [ Spacing.my1 ] [ text "Parent/Guardian sign-up for evening and weekend lessons 1-4:" ]
        , a [ target "_blank", href "https://forms.gle/vyJvmpZFPaVULyzt7" ] 
                [ text "https://forms.gle/vyJvmpZFPaVULyzt7" ]
        , h4 [ Spacing.my1 ] [ text "Parent/Guardian sign-up for evening and weekend lessons 5-13:" ]
        , a [ target "_blank", href "https://www.eng.mcmaster.ca/forms/mcmaster-start-coding-lessons-2021" ] [ text "https://www.eng.mcmaster.ca/forms/mcmaster-start-coding-lessons-2021" ]
        , div [ Spacing.my1 ] []


        , Html.div [style "display" "flex", style "flex-direction" "row"]
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
        , mkLesson model.tab (elmLesson model.tab) 
        ]

isNotSelected (flag,x) = if flag then Nothing else Just x 
isSelected (flat,x) = if flat then Just x else Nothing 

tabButton selectedTab thisTab =
    let
        f = if selectedTab then
                Tabs.tippedPaint GSVG.lightGrey
            else
                Tabs.uprightPaint GSVG.lightGrey
    in  
        f   (TabMsg thisTab
            ,(if thisTab < 5 then Parameters.freeClr else Parameters.lessonClr thisTab)
            ,("Lesson","",String.fromInt thisTab)
            )

type alias LessonInfo =
    { shortName : String
    , name : String
    , beforeLesson : List String
    , duringLesson : String
    , learningObjectives : List String
    , video : String
    , timing : List (BulletPoint, Link)
    , fb : Link
    , insta : Link
    , tweet : Link
    , email : (String,List PreHtml)
    , poster : (ButtonFace,Link) 
    }

defaultLesson =
    { shortName = ""
    , name = ""
    , beforeLesson = []
    , duringLesson = ""
    , learningObjectives = []
    , video = ""
    , timing = []
    , fb = ""
    , insta = ""
    , tweet = ""
    , email = ("",[])
    , poster = ("","") 
    }

--Create groups and definitions to make your code more efficient. Learn how to use code comments

mkLesson : Int -> LessonInfo -> Html msg
mkLesson tab info = 
    Grid.containerFluid [] -- [style "background-color" (htmColor tab)]
        [ div [ Spacing.my1, style "font-weight" "700" ] [ text "What to do before the lesson" ]
        , 
            (ul []
                ( List.map ( \ txt -> li [] [ text txt ] ) info.beforeLesson)
            )
        ,  div [ Spacing.my1, style "font-weight" "700" ] [ text "What to expect during the lesson" ]
        , (text info.duringLesson)
        , div [ Spacing.my1, style "font-weight" "700" ] [ text "Learning objectives" ]
        ,
            (ul []
                ( List.map ( \ txt -> li [] [ text txt ] ) info.learningObjectives)
            )
        , div [ Spacing.my1,style "font-weight" "700" ] [ text "Learn at home with YouTube video:" ]
        , a [ target "_blank", href info.video ] [ img [ style "width" "80px", src "img/yt_logo_rgb_light.png" ] [] ]
        --,  a [ src info.video, width 971, height 546 ] []
        ]


elmLesson tab = case tab of
    1 -> { defaultLesson 
        | name = Parameters.lessonName tab
        , shortName = "L"++String.fromInt tab
        , beforeLesson =
                [  "Prior to learning Elm, there are a some tasks that need to be accomplished:"
                , "Ensure that you have signed up for the correct lesson (Lesson 1);"
                , "You will need the username and password that was provided after you’ve signed up; and,"
                , "A laptop, iPad or Chromebook will be necessary to access zoom and the macoutreach.rocks website."
                , "Now, be excited and ready to learn!!"
                ]
        , duringLesson = "In this lesson we will learn what functional programming is, along with what Elm is. We will learn about the macoutreach.rocks website as well as the design and importance of each section of the website. We will learn how to make basic shapes using the Shape Creator tool. We will learn about shapes and stencils as well as how to apply different transformations (move, rotate, make transparent, etc) to shapes. The last thing we'll be learning is the colour tool in the macoutreach.rocks website. These are the tools you will need to create images of your own!" 
        , learningObjectives = [ "By the end of this lesson, you should know:"
                , "What functional programming is"
                , "How to use the macoutreach.rocks website"
                , "How to create a shape using the Shape Creator"
                , "How to apply transformations to shapes"
                , "How to change colours using the RGB flashlight" 
                ]
        , video =  "https://www.youtube.com/embed/8eMUJjORtaw"
        }

    2 -> { defaultLesson 
        | name = Parameters.lessonName tab
        , beforeLesson = ["Prior to continuing, there are a some tasks that need to be accomplished:" 
                        , "-Ensure that you have signed up for the correct lesson (Lesson 2);"
                        , "-It is important that you or your child are/is comfortable with the content taught in Lesson 1." 
                        ]
        , duringLesson = "During the lesson, you will learn about grouping and how to accurately name the groups. You will also be taught how to add transformations to a group and how to change the colour of a group. The last thing that will be taught is commenting and the importance of commenting in programming." 
        , learningObjectives = [ "By the end of this lesson, you should know:."
                , "How to create a group."
                , "How to correctly name a group."
                , "How to apply transformation(s) to a group(s)."
                , "How to change the colour(s) of a group(s)."
                , "How to add comments to your code." ]
        , video =  "https://www.youtube.com/embed/mTfEcqR8mX8"
        }

    3 -> { defaultLesson | name = Parameters.lessonName tab
        , beforeLesson = ["Prior to learning animations, you should be able to draw basic shapes, use grouping to collect different shapes into one definition, and understand how to manipulate shapes. More specifically, you should be comfortable with using move, rotate, and scale functions on stencils." ]
        , duringLesson = "This builds upon our knowledge of basic 2D drawings by using mathematical properties to animate them. Most of the lesson material should be straight forward, with the exception of understanding trigonometric functions, which could present a challenge for students not yet in high school." 
        , learningObjectives = [ "Using model.time to animate shapes in elm."
                , "Using mathematical functions to rotate shapes in elm."
                , "Understand how to avoid moving shapes endlessly in one direction, via the use of trigonometric functions."
                , "Changing speed/direction of animation."
                , "Understand how to use rgb/hsl and animate colours using model.time." ]
                , video =  "https://www.youtube.com/embed/Wrkmj2sEYD8"
        }

    4 -> { defaultLesson | name = Parameters.lessonName tab
        , beforeLesson = ["It is expected that you have completed the first two lessons to understand and follow along during this lesson. Specifically being able to draw and move basic shapes to create pictures and creating groups so that you are able to move multiple shapes with only one function." ]
        , duringLesson = "You should expect to create one or more functions so that you are able to change features like colour or size of the picture/object in your group. You will be able to change the features in one step rather than changing the features of all the simple shapes." 
        , learningObjectives = [ "Create multiple functions in groups to change features of the picture." ]
        , video =  "https://www.youtube.com/embed/O-X2hMXhAAM"
        }

    5 -> { defaultLesson | name = Parameters.lessonName tab
        , beforeLesson = ["Prior to learning this lesson, you should have done basic shapes and animations and understand the basics of how time is used to make shapes move. More specifically, you should be comfortable with making shapes rotate and move with time, and make shapes move back and forth with sine and cosine. You should also be familiar with grouping and definitions." ]
        , duringLesson = "This lesson builds on both drawing and animation. For drawings, we’ll explore advanced ways of “clipping” or “cutting out” shapes using other shapes. This can be used to add patterns and intricate decorations to objects, without worrying about “drawing outside the lines”. Then, we’ll learn about how to do advanced animations, including two new ways of repeating an object’s movement and moving an object on a path. There is quite a bit of material in this lesson, but each example should be fairly straightforward and example code will be provided to make it easier to absorb. It is recommended, as always, that you modify the given code as much as possible to make your own animation, in order to learn more effectively." 
        , learningObjectives = [ "Using clipping to create intricate designs in Elm, such as a partial moon with craters and a striped t-shirt."
                , "Calling new Elm repeat functions to animate in new ways."
                , "How to make shapes grow and repeat using the repeat functions."
                , "Using if else-if expressions to move shapes along pathways with multiple line segments." 
                , "Make your shapes move in a path, use clipping, and learn about our repeat function." ]
        , video =  "https://www.youtube.com/embed/dG7-aj6_iuA"
        }

    6 -> { defaultLesson | name = Parameters.lessonName tab
        , beforeLesson = ["Make sure that you are comfortable with the content covered in lessons 1 to 5." ]
        , duringLesson = "You will learn how to achieve 2.5D perspective in pictures and animations by converting shapes into layers." 
        , learningObjectives = [ "Understand how to implement 2.5D perspective into pictures and animations." ]
        , video =  "https://www.youtube.com/embed/gkZpTmbmVpw"
        }

    7 -> { defaultLesson | name = Parameters.lessonName tab
        , beforeLesson = ["Make sure you have attended Lesson 4 - Functions, and know how to use functions to create shapes." ]
        , duringLesson = "In this lesson, we will be teaching you how to use recursion in Elm. Students will learn how to use recursion to draw various patterns and animations, with mentors providing examples to help you get started." 
        , learningObjectives = [ "Use recursion to create more complex drawings and patterns." ]
        , video =  "https://www.youtube.com/embed/M_aNOZIwkN4"
        }

    8 -> { defaultLesson | name = Parameters.lessonName tab
        , beforeLesson = ["To prep for this lesson please ensure that you have attended all previous lessons. It is imperative that you are comfortable with the topics discussed in lessons 1-3." ]
        , duringLesson = "In this lesson we will be exploring the use of state diagrams in a live action game which hones in on problem solving and logical reasoning skills. Then using this basic understanding of state diagrams we will construct our own in order to develop an adventure game. Students will be encouraged to come up with their own setting and layout of an adventure game of their own. We will then use our skills developed from lessons 1-3 to create objects and characters to help our game come to life." 
        , learningObjectives = [ "Design your adventure game during Petri nets."
                , "Understand the importance of ‘transitions’ and ‘states’ to create state diagrams using PalDraw."
                , "Practice skills pertaining to communication and literacy to develop an original adventure game." ]
        , video =  "https://www.youtube.com/embed/8fH-0Nf8Tbw"
        }

    9 -> { defaultLesson | name = Parameters.lessonName tab
        , beforeLesson = ["Students should have a general understanding of how a message works in Elm and how we can change model properties in update function upon getting a message. Attending lesson 8 is highly recommended as lesson 9 is built on top of lesson 8 materials." ]
        , duringLesson = "Students will learn more in depth of the general structure of Elm: init, update, and view. Specifically, they will learn how to do keyboard interactions. On top of this, they will learn more advanced Elm techniques such as let-in statement, and pattern matching." 
        , learningObjectives = [ "Understand various ways on how you can achieve keyboard interactions."
                , "Understand updating model more in depth."
                , "Understand how “GetKeyState” works in message “Tick”."
                , "Understand advanced elm techniques such as let-in statement and pattern matching." ]
        , video =  "https://www.youtube.com/embed/XnNCxB_dj68"
        }

    12 -> { defaultLesson | name = Parameters.lessonName tab
        , beforeLesson = ["To prepare for this lesson, students are highly recommended to have done lessons 1-4 as the syntax in this lesson can be challenging for beginners." ]
        , duringLesson = "Bootstrap is a powerful and simple tool for getting websites up and running quickly, and in this lesson we will teach you the basics of it. We will use Elm Bootstrap and HTML to create a working Bootstrap grid and container system. If time permits, participants will also have a chance to design a tic-tac-toe 3x3 grid." 
        , learningObjectives = [ "Learn how to use Bootstrap tools."
                , "Learn basic web development concepts."
                , "Learn how to apply responsive styles that work on a variety of devices." ]
        , video =  "Coming soon."
        }

    _ -> { defaultLesson | name = Parameters.lessonName tab
        , beforeLesson = ["Complete Lesson 12 first." ]
        , duringLesson = "We will review the way Bootstrap uses Grids to structure pages usable from phones to large screens, and add to our knowlege of structuring pages and using html styles, headers and images." 
        , learningObjectives = [ "document structure", "working on large and small devices", "text styling", "adding links", "including images", "accessing documentation"]
        , video =  "Coming soon."
        }



links2games : String -> ( String, String ) -> Html msg
links2games title links =
    Grid.container []
        [ Grid.row []
            [ Grid.col [] [ p [] [ text title ] ]
            ]
        , Grid.row []
            [ Grid.col [ Col.md9 ] []
            , Grid.col [ Col.md3, Col.topMd ]
                [ oneLink links ]
            ]
        ]


oneLink : ( String, String ) -> Html msg
oneLink ( name, url ) =
    Grid.row [ Row.attrs [ Spacing.mt2 ] ]
        [ Grid.col []
            [ Button.linkButton
                [ Button.primary, Button.small, Button.attrs [ target "_blank", href url, Html.Attributes.style "width" "100%" ] ]
                [ text name ]
            ]
        ]
