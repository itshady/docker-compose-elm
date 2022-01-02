module Hackathon exposing (..)

import Bootstrap.Accordion as Accordion
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


badgeHackathon =
    Grid.row []
        [ Grid.col []
            [ Card.config [ Card.outlineSecondary ]
                |> Card.headerH3 [ style "color" "crimson", style "font-weight" "700" ] [ text "Badge Hackathon" ]
                |> Card.block []
                    [ Block.text []
                        [ text "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enimur."
                        ]
                    , Block.custom
                        (links2games "Comics 2019"
                            "img/CarnivorousPlants.png"
                            [ ( "Carnivorous Plants", "https://macoutreach.rocks/CarniverousPlants.html" )
                            , ( "How Long Can Worms Grow", "https://macoutreach.rocks/Worms.html" )
                            ]
                        )
                    ]
                |> Card.view
            ]
        ]


postcardHackathon =
    Grid.row []
        [ Grid.col []
            [ Card.config [ Card.outlineSecondary ]
                |> Card.headerH3 [ style "color" "crimson", style "font-weight" "700" ] [ text "Postcard Hackathon" ]
                |> Card.block []
                    [ Block.text [] [ text "" ]
                    ]
                |> Card.view
            ]
        ]


page : Model -> List (Html Msg)
page model =
    [ h1 [ Spacing.my5 ] [ text "Hackathon" ]
    , badgeHackathon
    , postcardHackathon
    ]


links2games : String -> String -> List ( String, String ) -> Html msg
links2games title imgurl links =
    Grid.container []
        [ Grid.row []
            [ Grid.col []
                [ h2 [ Spacing.mt4 ] [ text title ]
                ]
            ]
        , Grid.row []
            [ Grid.col [ Col.md6 ]
                [ embed [ style "width" "100%", src imgurl ] []

                --<embed type="video/webm" src="video.mp4" width="400" height="300">
                ]
            , Grid.col [ Col.md3, Col.middleMd ]
                (List.map oneLink links)
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
