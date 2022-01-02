module SciOd exposing (page)

import Bootstrap.Grid as Grid
import Bootstrap.Grid.Col as Col
import Bootstrap.Grid.Row as Row
import Bootstrap.Navbar as Navbar
import Bootstrap.Utilities.Spacing as Spacing
import Browser exposing (UrlRequest)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import Model exposing (Model, Msg(..))
import Url exposing (Url)
import Url.Parser as UrlParser exposing ((</>), Parser, s, top)


page : Model -> List (Html Msg)
page model =
    [ Grid.row []
        [ Grid.col []
            [ h1 [ Spacing.my5 ] [ text "Science Odyssey 2018 @ Mac" ]
            ]
        , Grid.col [ Col.xs3 ]
            [ a [ href "http://www.sciod.ca/" ] [ img [ style "width" "300px", src "img/scienceodyssey.jpg" ] [] ]
            ]
        ]
    , Grid.row []
        [ Grid.col []
            [ text "For Science Odyssey 2018, McMaster Computing and Software Outreach taught children at Glen Brae, Lincoln Alexander, Nora Henderson, Ridgemount, Saginaw, St Luke, and Westview to create animations in the programming language Elm, with the challenge of illustrating K-2 reading words. We then taught high school students at Westmount to make games, and challenged them to make reading games to use the word animations. Here are the results:" ]
        ]
    , Grid.row []
        -- empty row
        [ Grid.col []
            [ h4 [] [ text " " ]
            ]
        ]
    , Grid.row []
        [ Grid.col [ Col.offsetSm1 ]
            [ a [ href "http://www.cas.mcmaster.ca/~anand/DirectionImagesSciOd2018.html" ] [ text "Image Direction" ] ]
        ]
    , Grid.row []
        [ Grid.col [ Col.offsetSm1 ]
            [ a [ href "http://www.cas.mcmaster.ca/~anand/WordMatchSciOd2018.html" ] [ text "Word Match" ] ]
        ]
    , Grid.row []
        [ Grid.col [ Col.offsetSm1 ]
            [ a [ href "http://www.cas.mcmaster.ca/~anand/JumbledSciOd2018.html" ] [ text "Jumbled" ] ]
        ]
    , Grid.row []
        [ Grid.col [ Col.offsetSm1 ]
            [ a [ href "http://www.cas.mcmaster.ca/~anand/LetterSeekSciOd2018.html" ] [ text "Letter Seek" ] ]
        ]
    , Grid.row []
        [ Grid.col [ Col.offsetSm1 ]
            [ a [ href "http://www.cas.mcmaster.ca/~anand/LetterDragSciOd2018.html" ] [ text "Letter Drag" ] ]
        ]
    , Grid.row []
        -- empty row
        [ Grid.col []
            [ h1 [] [ text " " ]
            ]
        ]
    , Grid.row []
        [ Grid.col []
            [ text "Some children even had fun doing it!" ]
        ]
    , Grid.row []
        -- empty row
        [ Grid.col []
            [ h5 [] [ text " " ]
            ]
        ]
    , img [ style "width" "500px", src "img/SciOd.jpg" ] []
    , Grid.row []
        -- empty row
        [ Grid.col []
            [ h1 [] [ text " " ]
            ]
        ]
    , Grid.row []
        [ Grid.col []
            [ text "We made a few games of our own:" ]
        ]
    , Grid.row []
        -- empty row
        [ Grid.col []
            [ h4 [] [ text " " ]
            ]
        ]
    , Grid.row []
        [ Grid.col [] []
        , Grid.col [ Col.xs11 ]
            [ a [ href "http://www.cas.mcmaster.ca/~anand/FlashlightSciOd2018.html" ] [ text "Flashlight" ] ]
        ]
    , Grid.row []
        [ Grid.col [] []
        , Grid.col [ Col.xs11 ]
            [ a [ href "http://www.cas.mcmaster.ca/~anand/Choose4SciOd2018.html" ] [ text "Choose4" ] ]
        ]
    , Grid.row []
        -- empty row
        [ Grid.col []
            [ h2 [] [ text " " ]
            ]
        ]
    , Grid.row []
        [ Grid.col []
            [ text "And we even have one to play as a class using a smartboard." ]
        ]
    , Grid.row []
        -- empty row
        [ Grid.col []
            [ h4 [] [ text " " ]
            ]
        ]
    , Grid.row []
        [ Grid.col [ Col.offsetSm1 ]
            [ a [ href "http://www.cas.mcmaster.ca/~anand/SciOdy2018.html" ] [ text "Letter Drop" ] ]
        ]
    , Grid.row []
        -- empty row
        [ Grid.col []
            [ h1 [] [ text " " ]
            ]
        ]
    , Grid.row []
        [ Grid.col []
            [ text "If you know any K-2 teachers, please share our games with them." ]
        ]
    , Grid.row []
        -- empty row
        [ Grid.col []
            [ h1 [] [ text " " ]
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
