module Research exposing (page)

import Bootstrap.Button as Button
import Bootstrap.Card as Card
import Bootstrap.Card.Block as Block
import Bootstrap.Carousel as Carousel
import Bootstrap.Carousel.Slide as Slide
import Bootstrap.Grid as Grid
import Bootstrap.Grid.Col as Col
import Bootstrap.Grid.Row as Row
import Bootstrap.ListGroup as Listgroup
import Bootstrap.Navbar as Navbar
import Bootstrap.Text as Text
import Bootstrap.Utilities.Spacing as Spacing
import Browser exposing (UrlRequest)
import Browser.Navigation as Navigation
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import Model exposing (Model, Msg(..))
import Url exposing (Url)
import Url.Parser as UrlParser exposing ((</>), Parser, s, top)

page : Model -> List (Html Msg)
page model =
    [ h1 [ Spacing.my5 ] [ text "🔬 Research" ]
    , Grid.containerFluid []
        [ Grid.row []
            --empty row
            [ Grid.col []
                [ h1 [] [ text "" ]
                ]
            ]
        , Grid.row []
            [ Grid.col [ Col.md4 ]
                [ Card.config []
                    |> Card.headerH3 [ style "color" "crimson", style "font-weight" "700" ] [ text "CAN-CWiC Poster" ]
                    |> Card.block []
                        [ Block.text [] [ text "Adventures in Petri App Land: Design Thinking and Multi-User Applications PAL Draw" ]
                        , Block.link [ target "_blank", href "https://www.researchgate.net/publication/337144709_Adventures_in_Petri_App_Land_Design_Thinking_and_Multi-User_Applications_PAL_Draw" ] [ text "View poster." ]
                        ]
                    |> Card.view
                ]
            , Grid.col [ Col.md4 ]
                [ Card.config []
                    |> Card.headerH3 [ style "color" "crimson", style "font-weight" "700" ] [ text "TFPIE 2019 Slides" ]
                    |> Card.block []
                        [ Block.text [] [ text "Modelling Distributed Computation with Petri Nets so Children Can Program Multiplayer Universes" ]
                        , Block.link [ target "_blank", href "https://wiki.tfpie.science.ru.nl/11:30_-_12:00" ] [ text "View slides." ]
                        ]
                    |> Card.view
                ]
            , Grid.col [ Col.md4 ]
                [ Card.config []
                    |> Card.headerH3 [ style "color" "crimson", style "font-weight" "700" ] [ text "ICS 2019 - Comics Poster" ]
                    |> Card.block []
                        [ Block.text [] [ text "Animated Comics: Building Literacy through Teamwork" ]
                        , Block.link [ target "_blank", href "https://www.researchgate.net/publication/334811735_Animated_Comics_Building_Literacy_through_Teamwork" ] [ text "View poster." ]
                        ]
                    |> Card.view
                ]
            , Grid.col [ Col.md4 ]
                [ Card.config []
                    |> Card.headerH3 [ style "color" "crimson", style "font-weight" "700" ] [ text "ICS 2019 - PAL Poster" ]
                    |> Card.block []
                        [ Block.text [] [ text "Petri App Land: A Model-Driven Framework for Functional Client-Server Applications Petri App Land: A Model-Driven Framework for Functional Client-Server Applications" ]
                        , Block.link [ target "_blank", href "https://www.researchgate.net/publication/334811823_Petri_App_Land_A_Model-Driven_Framework_for_Functional_Client-Server_Applications_Petri_App_Land_A_Model-Driven_Framework_for_Functional_Client-Server_Applications" ] [ text "View poster." ]
                        ]
                    |> Card.view
                ]
            , Grid.col [ Col.md4 ]
                [ Card.config []
                    |> Card.headerH3 [ style "color" "crimson", style "font-weight" "700" ] [ text "ICS 2019 - Teamwork Poster" ]
                    |> Card.block []
                        [ Block.text [] [ text "Does Mentoring Develop Deep Skills in Undergraduate Mentors?" ]
                        , Block.link [ target "_blank", href "img/TeamworkICS2019.pdf" ] [ text "View poster." ]
                        ]
                    |> Card.view
                ]
            , Grid.col [ Col.md4 ]
                [ Card.config []
                    |> Card.headerH3 [ style "color" "crimson", style "font-weight" "700" ] [ text "CASCON 2018 Slides" ]
                    |> Card.block []
                        [ Block.text [] [ text "Graphics Programming in Elm Develops Math Knowledge & Social Cohesion" ]
                        , Block.link [ target "_blank", href "https://www.researchgate.net/publication/328701758_Graphics_Programming_in_Elm_Develops_Math_Knowledge_Social_Cohesion" ] [ text "View slides." ]
                        ]
                    |> Card.view
                ]
            , Grid.col [ Col.md4 ]
                [ Card.config []
                    |> Card.headerH3 [ style "color" "crimson", style "font-weight" "700" ] [ text " CASCON 2018 Paper" ]
                    |> Card.block []
                        [ Block.text [] [ text "Graphics Programming in Elm Develops Math Knowledge & Social Cohesion" ]
                        , Block.link [ target "_blank", href "https://dl.acm.org/citation.cfm?id=3291308" ] [ text "View paper." ]
                        ]
                    |> Card.view
                ]
            , Grid.col [ Col.md4 ]
                [ Card.config []
                    |> Card.headerH3 [ style "color" "crimson", style "font-weight" "700" ] [ text "IMCL2018 Slides" ]
                    |> Card.block []
                        [ Block.text [] [ text "A Framework for Preadolescent Programmers to Create Cooperative Multiplayer Reading Games" ]
                        , Block.link [ target "_blank", href "https://www.researchgate.net/publication/328517783_A_Framework_for_Preadolescent_Programmers_to_Create_Cooperative_Multiplayer_Reading_Games" ] [ text "View slides." ]
                        ]
                    |> Card.view
                ]
            , Grid.col [ Col.md4 ]
                [ Card.config []
                    |> Card.headerH3 [ style "color" "crimson", style "font-weight" "700" ] [ text "IMCL2018 Paper" ]
                    |> Card.block []
                        [ Block.text [] [ text "A Framework for Preadolescent Programmers to Create Cooperative Multiplayer Reading Games" ]
                        , Block.link [ target "_blank", href "https://www.researchgate.net/publication/328517973_AAM_A_Framework_for_Preadolescent_Programmers_to_Create_Cooperative_Multiplayer_Reading_Games" ] [ text "View paper." ]
                        ]
                    |> Card.view
                ]
            , Grid.col [ Col.md4 ]
                [ Card.config []
                    |> Card.headerH3 [ style "color" "crimson", style "font-weight" "700" ] [ text "EdCog 2018: Wordathon Poster" ]
                    |> Card.block []
                        [ Block.text [] [ text "Wordathon: A Tool for Social Learning" ]
                        , Block.link [ target "_blank", href "https://www.researchgate.net/publication/326631727_Wordathon_A_Tool_for_Social_Learning" ] [ text "View poster." ]
                        ]
                    |> Card.view
                ]
            , Grid.col [ Col.md4 ]
                [ Card.config []
                    |> Card.headerH3 [ style "color" "crimson", style "font-weight" "700" ] [ text "EdCog 2018: CoolDemos Poster" ]
                    |> Card.block []
                        [ Block.text [] [ text "Applying Cognitive Load Theory to Improve K-12 Computer Science Education: An Automated Tool" ]
                        , Block.link [ target "_blank", href "https://www.researchgate.net/publication/326631504_Applying_Cognitive_Load_Theory_to_Improve_K-12_Computer_Science_Education_An_Automated_Tool" ] [ text "View poster." ]
                        ]
                    |> Card.view
                ]
            , Grid.col [ Col.md4 ]
                [ Card.config []
                    |> Card.headerH3 [ style "color" "crimson", style "font-weight" "700" ] [ text "TFPIE 2017 Paper" ]
                    |> Card.block []
                        [ Block.text [] [ text "Using Elm to Introduce Algebraic Thinking to K-8 Students" ]
                        , Block.link [ target "_blank", href "http://eptcs.web.cse.unsw.edu.au/paper.cgi?TFPIE2017.2" ] [ text "View paper." ]
                        ]
                    |> Card.view
                ]
            ]
        , Grid.row []
            -- empty row
            [ Grid.col []
                [ h1 [] [ text " " ]
                ]
            ]
        , Grid.row [ Row.attrs [ style "background-color" "rgb(52,58,64)" ] ]
            -- grey space
            [ Grid.col []
                [ h1 [] [ text " " ]
                ]
            ]
        ]
    ]
