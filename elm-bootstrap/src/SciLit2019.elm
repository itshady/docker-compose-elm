module SciLit2019 exposing (page)

import Bootstrap.Button as Button
import Bootstrap.Card as Card
import Bootstrap.Card.Block as Block
import Bootstrap.Carousel as Carousel
import Bootstrap.Carousel.Slide as Slide
import Bootstrap.Grid as Grid
import Bootstrap.Grid.Col as Col
import Bootstrap.Grid.Row as Row
import Bootstrap.ListGroup as Listgroup
import Bootstrap.Modal as Modal
import Bootstrap.Navbar as Navbar
import Bootstrap.Text as Text
import Bootstrap.Utilities.Spacing as Spacing
import Browser exposing (UrlRequest)
import Browser.Navigation as Navigation
import GraphicSVG as GSVG
import GraphicSVG.Widget as Widget
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import Model exposing (Model, Msg(..))
import SVGPictures
import Url exposing (Url)
import Url.Parser as UrlParser exposing ((</>), Parser, s, top)


page : Model -> List (Html Msg)
page model =
    [ Grid.row []
        [ Grid.col []
            [ h1 [ Spacing.my5 ] [ text "Science Literacy Week 2019" ]
            ]
        , Grid.col [ Col.xs3 ]
            [ a [ href "http://www.sciod.ca/" ] [ img [ style "width" "300px", src "img/sciLitWeek.png" ] [] ]
            ]
        ]
    , Grid.row []
        [ Grid.col []
            [ text "For Science Literacy Week 2019, we partnered with Katie Moisse, an expert in science communication, to create animated comics answering questions proposed by local children.  Senior elementary children, many of who participated in our summer camp worked on two comics:" ]
        ]
    , Grid.row []
        -- empty row
        [ Grid.col []
            [ h4 [] [ text " " ]
            ]
        ]
    , Grid.row []
        [ Grid.col [ Col.offsetSm1 ]
            [ a [ href "https://macoutreach.rocks/CarniverousPlants.html" ] [ text "Can plants eat animals?" ] ]
        , Grid.col [ Col.offsetSm1 ]
            [ a [ href "https://macoutreach.rocks/Worms.html" ] [ text "How long can worms grow?" ] ]
        ]
    , Grid.row []
        [ Grid.col [ Col.offsetSm1 ]
            [ img [ style "width" "300px", src "img/CarnivorousPlants.png" ] [] ]
        , Grid.col [ Col.offsetSm1 ]
            [ img [ style "width" "300px", src "img/HowLongCanWormsGrow.png" ] [] ]
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
