module Examples exposing (page)

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
    [ h1 [ Spacing.my5 ] [ text "Examples" ]
    , Grid.row []
        [ Grid.col []
            [ Card.config [ Card.outlineSecondary ]
                |> Card.headerH4 [] [ text "Code Examples" ]
                |> Card.block []
                    [ Block.text [] [ text "See coding examples of codes from students." ]
                    , Block.custom <|
                        Button.linkButton
                            [ Button.primary, Button.attrs [ href "http://www.cas.mcmaster.ca/~anand/examples/" ] ]
                            [ text "View Examples" ]
                    ]
                |> Card.view
            ]
        , Grid.col []
            [ Card.config [ Card.outlineSecondary ]
                |> Card.headerH4 [] [ text "Cool Demos" ]
                |> Card.block []
                    [ Block.text [] [ text "See some interesting demostrations in Elm developed from students." ]
                    , Block.custom <|
                        Button.linkButton
                            [ Button.primary, Button.attrs [ href "http://www.cas.mcmaster.ca/~anand/CoolDemos/" ] ]
                            [ text "View Cool Demos" ]
                    ]
                |> Card.view
            ]
        ]
    , Grid.row [ Row.attrs [ style "position" "fixed", style "bottom" "0px", style "left" "12px", style "width" "100%", style "background-color" "rgb(52,58,64)" ] ]
        -- grey space
        [ Grid.col []
            [ h1 [] [ text " " ]
            ]
        ]
    ]
