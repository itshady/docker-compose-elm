module Main exposing (main)

--import FAQ

import Board
import Bootstrap.Accordion as Accordion
import Bootstrap.Button as Button
import Bootstrap.Card as Card
import Bootstrap.Card.Block as Block
--import Bootstrap.Carousel as Carousel
--import Bootstrap.Carousel.Slide as Slide
import Bootstrap.Grid as Grid
import Bootstrap.Grid.Col as Col
import Bootstrap.ListGroup as Listgroup
import Bootstrap.Modal as Modal
import Bootstrap.Navbar as Navbar
import Browser exposing (UrlRequest)
import Browser.Dom as Dom
import Browser.Navigation as Navigation
import Calendar
import Camps
import ClassVisits
import Club
import CodingTools
import Comics2019
import Contact
import Donate
import Examples
import Execs
import Hackathon
import Home
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import Jr
import Lessons
import Model exposing (Model, Msg(..), Page(..))
import NYH
import FAQ
import Process
import Research
import SciLit2019
import SciOd
import Showcase
import Task
import Team
import Time
import Tutoring
import Url exposing (Url)
import Url.Parser as UrlParser exposing ((</>), Parser, top)
import Wordathon2019

import Parameters exposing (Tabs(..))

type alias Flags =
    { time : Int }


main : Program Flags Model Msg
main =
    Browser.application
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        , onUrlRequest = ClickedLink
        , onUrlChange = UrlChange
        }


init : Flags -> Url -> Navigation.Key -> ( Model, Cmd Msg )
init flags url key =
    let
        ( navState, navCmd ) =
            Navbar.initialState NavMsg

        ( campState, campCmd ) =
            Camps.init

        ( lessonsState, lessonsCmd ) =
            Lessons.init

        ( calState, calCmd ) =
            Calendar.init

        ( model, urlCmd ) =
            urlUpdate url
                { navKey = key
                , navState = navState
                , page = Home
                , campsState = campState
                , calendarState = calState
                , lessonsState = lessonsState
                , videoState = Modal.hidden
                , zone = Time.utc
                , time = Time.millisToPosix <| flags.time
                }
    in
    ( model, Cmd.batch [ urlCmd, navCmd, Cmd.map CalendarMsg calCmd, Cmd.map CampsMsg campCmd, Cmd.map LessonsMsg lessonsCmd ] )


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ Navbar.subscriptions model.navState NavMsg
        , Time.every 10000 Model.Tick
        ]


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        ClickedLink req ->
            case req of
                Browser.Internal url ->
                    ( model, Navigation.pushUrl model.navKey <| Url.toString url )

                Browser.External href ->
                    ( model, Navigation.load href )

        UrlChange url ->
            urlUpdate url model

        NavMsg state ->
            ( { model | navState = state }
            , Cmd.none
            )

        -- CarouselMsg subMsg ->
        --     ( { model | carouselState = Carousel.update subMsg model.carouselState }
        --     , Cmd.none
        --     )

        CampsMsg campsMsg ->
            let ( campState, campCmd ) = Camps.update campsMsg model.campsState
            in
            ( { model | campsState = campState }
            , Cmd.map CampsMsg campCmd
            )

        CalendarMsg calMsg ->
            let ( calState, calCmd ) = Calendar.update calMsg model.calendarState
            in
            ( { model | calendarState = calState }
            , Cmd.map CalendarMsg calCmd
            )

        LessonsMsg lessonsMsg ->
            let ( lessonsState, lessonsCmd ) = Lessons.update lessonsMsg model.lessonsState
            in
            ( { model | lessonsState = lessonsState }
            , Cmd.map LessonsMsg lessonsCmd
            )

        OpenVideo ->
            ( { model | videoState = Modal.shown }
            , Cmd.none
            )

        CloseVideo ->
            ( { model | videoState = Modal.hidden }
            , Cmd.none
            )

        Tick newTime ->
            ( { model | time = newTime }
            , Cmd.none
            )

        AdjustTimeZone newZone ->
            ( { model | zone = newZone }
            , Cmd.none
            )

        NoOp ->
            ( model, Cmd.none )


urlUpdate : Url -> Model -> ( Model, Cmd Msg )
urlUpdate url model =
    case decode model url of
        Nothing ->
            ( { model | page = NotFound }, resetViewport )

        Just route ->
            (   { model | page = route 
                    , campsState = case route of 
                                      Camps tab -> Camps.setTab model.campsState tab
                                      _ -> model.campsState
                }
            , resetViewport )


resetViewport : Cmd Msg
resetViewport =
    Task.perform (\_ -> NoOp) (Dom.setViewport 0 0)


decode : Model -> Url -> Maybe Page
decode model url =
    { url | path = Maybe.withDefault "" url.fragment, fragment = Nothing }
        |> UrlParser.parse (routeParser model)


routeParser : Model -> Parser (Page -> a) a
routeParser model =
    UrlParser.oneOf
        [ UrlParser.map Home top
        , UrlParser.map Home (UrlParser.s "home")
        , UrlParser.map Club (UrlParser.s "club")
        , UrlParser.map ClassVisits (UrlParser.s "classvisits")
        , UrlParser.map SciOd (UrlParser.s "sci-od")
        , UrlParser.map model.page (UrlParser.s "whereyouare") -- Nav bar toggle redirects to same page
        , UrlParser.map SciLit2019 (UrlParser.s "scilit2019")
        , UrlParser.map NewYouthHack (UrlParser.s "nyh")
        , UrlParser.map Showcase (UrlParser.s "showcase")
        , UrlParser.map Jr (UrlParser.s "jr")
        , UrlParser.map CodingTools (UrlParser.s "coding-tools")
        , UrlParser.map Examples (UrlParser.s "examples")
        , UrlParser.map Contact (UrlParser.s "contact")
        , UrlParser.map FAQ (UrlParser.s "faq")
        , UrlParser.map Research (UrlParser.s "research")
        , UrlParser.map (Lessons 1) (UrlParser.s "lessons")
        , UrlParser.map (Lessons 1) (UrlParser.s "lesson1")
        , UrlParser.map (Lessons 2) (UrlParser.s "lesson2")
        , UrlParser.map (Lessons 3) (UrlParser.s "lesson3")
        , UrlParser.map (Lessons 4) (UrlParser.s "lesson4")
        , UrlParser.map (Lessons 5) (UrlParser.s "lesson5")
        , UrlParser.map (Lessons 6) (UrlParser.s "lesson6")
        , UrlParser.map (Lessons 7) (UrlParser.s "lesson7")
        , UrlParser.map (Lessons 8) (UrlParser.s "lesson8")
        , UrlParser.map (Lessons 9) (UrlParser.s "lesson9")
        , UrlParser.map (Lessons 10) (UrlParser.s "lesson10")
        , UrlParser.map (Lessons 11) (UrlParser.s "lesson11")
        , UrlParser.map (Lessons 12) (UrlParser.s "lesson12")
        , UrlParser.map (Lessons 13) (UrlParser.s "lesson13")
        , UrlParser.map Hackathon (UrlParser.s "hackathon")
        , UrlParser.map (Camps Animation) (UrlParser.s "camps")
        , UrlParser.map (Camps Animation) (UrlParser.s "animation")
        , UrlParser.map (Camps Comics) (UrlParser.s "comics")
        , UrlParser.map (Camps Adventure) (UrlParser.s "adventure")
        , UrlParser.map (Camps Mini) (UrlParser.s "minigames")
        , UrlParser.map (Camps MiniSaturdays) (UrlParser.s "minigames-saturdays")
        , UrlParser.map (Camps ThreeD) (UrlParser.s "3d")
        , UrlParser.map (Camps Vaccine) (UrlParser.s "dtcamp")
        , UrlParser.map (Camps Picasso) (UrlParser.s "picasso")
        , UrlParser.map (Camps Escher) (UrlParser.s "escher")
        , UrlParser.map (Camps Beethoven) (UrlParser.s "beethoven")
        , UrlParser.map Tutoring (UrlParser.s "tutoring")
        , UrlParser.map Comics2019 (UrlParser.s "comics2019")
        , UrlParser.map Wordathon2019 (UrlParser.s "wordathon2019")
        , UrlParser.map Calendar (UrlParser.s "calendar")
        , UrlParser.map Board (UrlParser.s "board")
        , UrlParser.map Execs (UrlParser.s "execs")
        , UrlParser.map Team (UrlParser.s "team")
        , UrlParser.map Donate (UrlParser.s "donate")
        ]


view : Model -> Browser.Document Msg
view model =
    { title =
        case model.page of
            Home ->
                "McMaster Start Coding"

            Club ->
                "Club | McMaster Start Coding"

            ClassVisits ->
                "Class Visits | McMaster Start Coding"

            SciOd ->
                "Science Odyssey 2018 | McMaster Start Coding"

            NewYouthHack ->
                "NewYouthHack | Reimagining Settlement Services for New Immigrant and Refugee Youth"

            SciLit2019 ->
                "Science Literacy Week 2019 | Explaining Science with Comics"

            Showcase ->
                "Showcase | McMaster Start Coding"

            CodingTools ->
                "Coding Tools | McMaster Start Coding"

            Examples ->
                "Examples | McMaster Start Coding"

            Jr ->
                "Junior Mentors | McMaster Start Coding"

            Contact ->
                "Contact | McMaster Start Coding"

            Lessons _ ->
                "Lessons | McMaster Start Coding"

            Hackathon ->
                "Hackathon | McMaster Start Coding"

            FAQ ->
                "FAQ | McMaster Start Coding"
            Research ->
                "Research | McMaster Start Coding"

            Comics2019 ->
                "Comics2019 | McMaster Start Coding"

            Camps _ ->
                "Camps | McMaster Start Coding"

            Tutoring ->
                "Tutoring | McMaster Start Coding"

            Wordathon2019 ->
                "Wordathon2019 | McMaster Start Coding"

            Calendar ->
                "Calendar | McMaster Start Coding"

            Board ->
                "Board | McMaster Start Coding"

            Execs ->
                "Execs | McMaster Start Coding"

            Team ->
                "Team | McMaster Start Coding"

            Donate ->
                "Support McMaster Start Coding"

            NotFound ->
                "Page Not Found"
    , body =
        [ div []
            [ menu model
            , mainContent model
            ]
        ]
    }


menu : Model -> Html Msg
menu model =
    Navbar.config NavMsg
        |> Navbar.withAnimation
        |> Navbar.brand [ href "/" ] [ img [ style "width" "120px", src "img/MSCWebsiteLogoT.png" ] [] ]
        |> Navbar.collapseSmall
        |> Navbar.items
            [ Navbar.dropdown
                { id = "camps"
                , toggle = Navbar.dropdownToggle [ href "#whereyouare", style "font-size" "14pt" ] [ text "Camps" ]
                , items =
                    [ Navbar.dropdownItem [ href "#animation" ] [ text "Animation Camp" ]
                    , Navbar.dropdownItem [ href "#comics" ] [ text "Comics Camp" ]
                    , Navbar.dropdownItem [ href "#adventure" ] [ text "Adventure Camp" ]
                    , Navbar.dropdownItem [ href "#minigames" ] [ text "Mini-Games Camp" ]
                    , Navbar.dropdownItem [ href "#3d" ] [ text "Journey into 3D" ]
                    , Navbar.dropdownItem [ href "#dtcamp" ] [ text "Design Thinking" ]
                    , Navbar.dropdownItem [ href "#picasso" ] [ text "Code like Picasso" ]
                    , Navbar.dropdownItem [ href "#escher" ] [ text "Code like Escher" ]
                    , Navbar.dropdownItem [ href "#beethoven" ] [ text "Code like Beethoven" ]
                    , Navbar.dropdownItem [ href "#minigames-saturdays" ] [ text "Mini-Games Saturdays" ]
                    ]
                }
            , Navbar.dropdown
                { id = "lessons"
                , toggle = Navbar.dropdownToggle [ href "#whereyouare", style "font-size" "14pt" ] [ text "Lessons" ]
                , items =
                    [  Navbar.dropdownItem [ target "_blank", href "https://www.youtube.com/channel/UCBwtZa2OjMg_QtZOTKdDfpg/videos" ] [ text "YouTube" ]
                    , Navbar.dropdownItem [ href "#lesson1" ] [ text "Lesson 1" ]
                    , Navbar.dropdownItem [ href "#lesson2" ] [ text "Lesson 2" ]
                    , Navbar.dropdownItem [ href "#lesson3" ] [ text "Lesson 3" ]
                    , Navbar.dropdownItem [ href "#lesson4" ] [ text "Lesson 4" ]
                    , Navbar.dropdownItem [ href "#lesson5" ] [ text "Lesson 5" ]
                    , Navbar.dropdownItem [ href "#lesson6" ] [ text "Lesson 6" ]
                    , Navbar.dropdownItem [ href "#lesson7" ] [ text "Lesson 7" ]
                    , Navbar.dropdownItem [ href "#lesson8" ] [ text "Lesson 8" ]
                    , Navbar.dropdownItem [ href "#lesson9" ] [ text "Lesson 9" ]
                    , Navbar.dropdownItem [ href "#lesson10" ] [ text "Lesson 10" ]
                    , Navbar.dropdownItem [ href "#lesson11" ] [ text "Lesson 11" ]
                    , Navbar.dropdownItem [ href "#lesson12" ] [ text "Lesson 12" ]
                    , Navbar.dropdownItem [ href "#lesson13" ] [ text "Lesson 13" ]
                    ]
                }
            , Navbar.itemLink [ href "#classvisits", style "font-size" "14pt" ] [ text "ClassVisits" ]
            , Navbar.itemLink [ href "#coding-tools", style "font-size" "18pt" ] [ text "🔨" ]
            , Navbar.itemLink [ href "#showcase", style "font-size" "18pt" ] [ text "🦄" ]
            , Navbar.itemLink [ href "#research", style "font-size" "18pt" ] [ text "🔬" ]
            , Navbar.dropdown
                { id = "volunteering"
                , toggle = Navbar.dropdownToggle [ href "#whereyouare" ] [ text "Volunteering" ]
                , items =
                    [ Navbar.dropdownItem [ href "#club" ] [ text "Undergraduates/Graduates" ]
                    , Navbar.dropdownItem [ href "#jr" ] [ text "Jr. Mentors" ]
                    ]
                }
            , Navbar.itemLink [ href "#nyh"] [ text "NewYouthHack" ]
            , Navbar.itemLink [ href "#faq" ] [ text "FAQ" ]
            --, Navbar.itemLink [ href "#lessons" ] [ div [] [text "Lessons"] ]
            --, Navbar.itemLink [ href "#hackathon" ] [ text "Hackathon" ] -- in progress
            , Navbar.itemLink [ href "#calendar" ] [ text "Calendar" ]
            , Navbar.dropdown
                { id = "teams"
                , toggle = Navbar.dropdownToggle [ href "#whereyouare" ] [ text "Teams" ]
                , items =
                    [ Navbar.dropdownItem [ href "#board" ] [ text "Board Members" ]
                    , Navbar.dropdownItem [ href "#execs" ] [ text "Club Executives" ]
                    , Navbar.dropdownItem [ href "#team" ] [ text "Mentors" ]
                    ]
                }
            , Navbar.itemLink [ href "#contact" ] [ text "Contact" ]

            --, Navbar.itemLink [ href "#donate" ] [ text "Donate" ]
            ]
        |> Navbar.view model.navState


mainContent : Model -> Html Msg
mainContent model =
    Grid.containerFluid [] <|
        case model.page of
            Home ->
                Home.page model

            ClassVisits ->
                ClassVisits.page model

            Club ->
                Club.page model

            SciOd ->
                SciOd.page model

            SciLit2019 ->
                SciLit2019.page model

            NewYouthHack ->
                NYH.page model

            Showcase ->
                Showcase.page model

            CodingTools ->
                CodingTools.page model

            Examples ->
                Examples.page model

            Contact ->
                Contact.page model

            Camps tab ->
                Camps.page model.campsState
                    |> List.map (Html.map CampsMsg)

            Tutoring ->
                Tutoring.page ()

            FAQ ->
                FAQ.page model

            Research ->
                Research.page model

            Comics2019 ->
                Comics2019.page model

            Wordathon2019 ->
                Wordathon2019.page model

            Calendar ->
                Calendar.page model.calendarState
                    |> List.map (Html.map CalendarMsg)

            Team ->
                Team.page model

            Board ->
                Board.page model

            Execs ->
                Execs.page model

            Jr ->
                Jr.page model

            Donate ->
                Donate.page model

            Lessons _ ->
                Lessons.page model.lessonsState
                    |> List.map (Html.map LessonsMsg)

            Hackathon ->
                Hackathon.page model

            NotFound ->
                pageNotFound


pageNotFound : List (Html Msg)
pageNotFound =
    [ h1 [] [ text "Not found" ]
    , text "Sorry couldn't find that page"
    ]
