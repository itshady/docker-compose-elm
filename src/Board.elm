module Board exposing (page)

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
    [ h1 [ Spacing.my5 ] [ text "Board" ]
    , h2 [ Spacing.my5 ] [ text "Software:  Tool for Change" ]
    , Grid.row []
        [ Grid.col []
            [ Card.config []
                |> Card.block []
                    [ Block.text []
                        [ text """Software: Tool for Change is a project of McMaster University.
                      Management and strategic direction are overseen by our board, while financial oversight is provided by McMaster Research Finance."""
                        ]
                    ]
                |> Card.view
            ]
        ]
    ]
        ++ List.map mkMember
            [ ( ( "Dr Kevin Browne (chair)", "img/browne_kevin.jpg" ), "Assistant Professor, Computing and Software", "McMaster University" )
            , ( ( "Dr Lori Goff", "img/LoriGoff.png" ), "Director, McPhearson Institute", "McMaster University" )
            , ( ( "Antonietta Kovach", "img/ToniKovach.jpg" ), "Superintendent of Education", "Hamilton-Wentworth Catholic District School Board" )
            , ( ( "Jimena Merlo", "img/JimenaMerlo.jpg" ), "Manager, Programs & Services", "Brampton Multicultural Community Centre" )
            , ( ( "Katherine Hesson-Bolton", "img/KatherineHesson-Bolton.jpg" ), "Diversity and Inclusion Officer, Student Success Centre", "McMaster University" )
            , ( ( "Margo Foster-Cohen", "img/MargoFoster-Cohen.png" ), "Grade 4-8 Enrichment Teacher", "Waterloo Region District School Board" )
            , ( ( "Stephanie Koehl", "img/mentorStephanie.png" ), "CEO", "SkyVolt" )
            , ( ( "Yumna Irfan (ex-officio)", "img/YumnaIrfan.jpg" ), "President", "McMaster Start Coding" )
            ]


mkMember ( ( name, picture ), position, organization ) =
    Grid.row []
        [ Grid.col []
            [ img [ style "width" "200px", src picture ] [] ]
        , Grid.col [ Col.md8 ]
            [ Card.config []
                |> Card.headerH3 [ style "color" "crimson", style "font-weight" "700" ] [ text name ]
                |> Card.block []
                    [ Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text position ]
                    , Block.text [ style "font-weight" "600", style "font-size" "20px" ] [ text organization ]
                    ]
                |> Card.view
            ]
        ]
