module Execs exposing (page)

import Bootstrap.Button as Button
import Bootstrap.Card as Card
import Bootstrap.Card.Block as Block
import Bootstrap.Grid as Grid
import Bootstrap.Grid.Col as Col
import Bootstrap.Grid.Row as Row
import Bootstrap.ListGroup as Listgroup
import Bootstrap.Navbar as Navbar
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
    [ h1 [ Spacing.my5 ] [ text "McMaster Start Coding" ]
    , h2 [ Spacing.my5 ] [ text "Executives" ]
    , Grid.row []
        [ Grid.col []
            [ Card.config []
                |> Card.block []
                    [ Block.text []
                        [ text """McMaster Start Coding is a student club of the McMaster Students Union.
                      MSC was founded by mentors who recognized that coding outreach at McMaster could grow if students had an official organization.
                        MSC currently recruits and trains mentors (undergraduate students who can become members of the club, graduate students who can be affiliates of the club, and junior mentors),
                        creates educational videos, posters and social media campaigns."""
                        ]
                    ]
                |> Card.view
            ]
        ]
    ]
        ++ List.map mkMember
            [ ( ( "Yumna Irfan", "img/YumnaIrfan.jpg" ), "President", "iBio, 4th year" )
            , ( ( "Chris Schankula", "img/ChrisSchankula.jpg" ), "VP Software Architecture", "Software Engineering & Society, 4th year" )
            , ( ( "Ankit Kapoor", "img/AnkitKapoor.jpg" ), "VP External", "Computer Science, 3rd year" )
            , ( ( "Pesara Amarasekera", "img/PesaraAmarasekera.jpg" ), "Assistant VP Software Archtitecture", "Software Engineering, 3rd year" )
            , ( ( "Mikha Muliadi", "img/Mikha.jpg" ), "Secretary", "Electrical Engineering & Society, 4th year" )
            , ( ( "Steven Gonder", "img/mentorSteven.jpg" ), "Marketing Strategist", "Computer Science, 3rd year" )
            , ( ( "Gurleen Dulai", "img/mentorGurleen.jpg" ), "Media and Design", "iBioMed, 3rd year" )
            ]


mkMember ( ( name, picture ), position, programAndYear ) =
    Grid.row []
        [ Grid.col []
            [ img [ style "width" "200px", src picture ] [] ]
        , Grid.col [ Col.md8 ]
            [ Card.config []
                |> Card.headerH3 [ style "color" "crimson", style "font-weight" "700" ] [ text name ]
                |> Card.block []
                    [ Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text position ]
                    , Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text programAndYear ]
                    ]
                |> Card.view
            ]
        ]
