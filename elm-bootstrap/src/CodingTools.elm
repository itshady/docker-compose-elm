module CodingTools exposing (page)

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
    [ h1 [ Spacing.my5 ] [ text "🔨 Coding Tools" ]
    , Grid.row []
        [ Grid.col []
            [ Card.config [ Card.outlineSecondary ]
                |> Card.headerH3 [ style "color" "crimson", style "font-weight" "700" ] [ text "Shape Creator" ]
                |> Card.block []
                    [ Block.text [] [ text "Start with the basics of animations and create different sizes and types of shapes." ]
                    , Block.custom <|
                        Button.linkButton
                            [ Button.primary, Button.attrs [ target "_blank", href "http://www.cas.mcmaster.ca/~anand/ShapeCreate2.html" ] ]
                            [ text "Try Shape Creator" ]
                    ]
                |> Card.view
            ]
        , Grid.col []
            [ Card.config [ Card.outlineSecondary ]
                |> Card.headerH3 [ style "color" "crimson", style "font-weight" "700" ] [ text "Code Editor" ]
                |> Card.block []
                    [ Block.text [] [ text "Edit code in Elm to develop things such as animations or games." ]
                    , Block.custom <|
                        Button.linkButton
                            [ Button.primary, Button.attrs [ target "_blank", href "https://macoutreach.rocks/" ] ]
                            [ text "Try Code Editor" ]
                    ]
                |> Card.view
            ]
        , Grid.col []
            [ Card.config [ Card.outlineSecondary ]
                |> Card.headerH3 [ style "color" "crimson", style "font-weight" "700" ] [ text "Ellie" ]
                |> Card.block []
                    [ Block.text [] [ text "Code in Elm or HTML and see your results in the web browser." ]
                    , Block.custom <|
                        Button.linkButton
                            [ Button.primary, Button.attrs [ target "_blank", href "https://ellie-app.com/4DzdvnDVDZCa1" ] ]
                            [ text "Try Ellie" ]
                    ]
                |> Card.view
            ]
        ]

    -- , Grid.row [Row.attrs[style "position" "fixed", style "bottom" "0px", style "left" "12px", style "width" "100%", style "background-color" "rgb(52,58,64)"]] -- grey space
    --    [ Grid.col []
    --        [h1[] [text " "]
    --        ]
    --     ]
    , h1 [ Spacing.my5 ] [ text "Examples" ]
    , Grid.row []
        [ Grid.col []
            [ Card.config [ Card.outlineSecondary ]
                |> Card.headerH3 [ style "color" "crimson", style "font-weight" "700" ] [ text "Code Examples" ]
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
                |> Card.headerH3 [ style "color" "crimson", style "font-weight" "700" ] [ text "Cool Demos" ]
                |> Card.block []
                    [ Block.text [] [ text "See some interesting demostrations in Elm developed from students." ]
                    , Block.custom <|
                        Button.linkButton
                            [ Button.primary, Button.attrs [ href "http://www.cas.mcmaster.ca/~anand/CoolDemos/" ] ]
                            [ text "View Cool Demos" ]
                    ]
                |> Card.view
            ]
        , Grid.col []
            [ Card.config [ Card.outlineSecondary ]
                |> Card.headerH3 [ style "color" "crimson", style "font-weight" "700" ] [ text "Monty Hall" ]
                |> Card.block []
                    [ Block.text [] [ text "In a popular game-show tactic, contestants are given a choice of three doors, only one of which conceals a prize. After picking one, another is opened to reveal a non-prize, and the contestant is asked if they want to change their choice.  Should they?  Why?" ]
                    , Block.custom <|
                        Button.linkButton
                            [ Button.primary, Button.attrs [ target "_blank", href "http://www.cas.mcmaster.ca/~anand/MontyHallSimulator.html" ] ]
                            [ text "Monty Hall Simulator" ]
                    ]
                |> Card.view
            ]
        ]
    , Grid.row [ Row.attrs [ style "background-color" "rgb(52,58,64)" ] ]
        -- grey space
        [ Grid.col []
            [ h1 [] [ text " " ]
            ]
        ]
    ]
