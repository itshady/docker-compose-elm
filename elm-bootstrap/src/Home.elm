module Home exposing (page)

import Bootstrap.Button as Button
import Bootstrap.Card as Card
import Bootstrap.Card.Block as Block
import Bootstrap.Carousel as Carousel
import Bootstrap.Carousel.Slide as Slide
import Bootstrap.Grid as Grid
import Bootstrap.Grid.Col as Col
import Bootstrap.Grid.Row as Row
import Bootstrap.Utilities.Flex as Flex
import Bootstrap.ListGroup as Listgroup
import Bootstrap.Modal as Modal
import Bootstrap.Navbar as Navbar
import Bootstrap.Text as Text
import Bootstrap.Utilities.Spacing as Spacing
import Bootstrap.Utilities.Size as Size
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
import Time


page : Model -> List (Html Msg)
page model =
    [ Grid.containerFluid []
        [ Grid.row [ Row.attrs [ class "ml0 mr0 w100" , class "row justify-content-center"] ]
            [ Grid.col []
                [ h4 [ Spacing.mb2, Spacing.mt5, style "line-height" "1.25", style "font-size" "40px", style "text-align" "center"  ]
                   [ text "Where kids ", i [style "font-size" "45px"] [text "create"],  text " ", span [style "display" "inline-block"] [text " with code" ]]
                ]
            ]
        , Grid.row [ Row.centerLg, Row.attrs [ class "ml0 mr0 w100" ] ]
            [ Grid.col [Col.attrs [Spacing.p0Lg, Spacing.pt4Lg, class "col align-self-center"]] 
                [ leftBlock
                ]
            , Grid.col [ Col.md8 ]
                [ Card.config []
                    |> Card.block []
                        [ Block.custom (img [ style "width" "100%", src (bannerGif model.time) ] [])
                        ]
                    |> Card.view
                ]
            ]
        , Grid.row [ Row.centerXs, Row.attrs [] ]
            [ Grid.col [Col.md4]
                [ h3 [ style "color" "rgb(121,20,60)", style "text-align" "center" ] [ text "McMaster Start Coding makes math fun." ]
                ]
            , Grid.col [Col.md4]
                [ h3 [ style "color" "rgb(121,20,60)", style "text-align" "center" ]
                    [ text "We have taught 21,174 new coders from over 738 classes!" ]
                ]
            ]

        , Grid.row []
            --empty row
            [ Grid.col []
                [ h1 [] [ text " " ]
                ]
            ]
        
        , Grid.row [ Row.middleMd ]
            [ Grid.col [ Col.textAlign Text.alignXsCenter ]
                [ Grid.row []
                    [ Grid.col []
                        [ h2 [ style "text-align" "center" ] [ text "Thanks for your support:" ]
                        ]
                    ]
                , Grid.row [ Row.middleMd ]
                    [ Grid.col [ Col.textAlign Text.alignXsCenter ]
                        [ img [ style "height" "80px", src "img/nserclogo.jpg" ] []
                        ]
                    , Grid.col [ Col.textAlign Text.alignXsCenter ]
                        [ a [ target "_blank", href "https://www.eng.mcmaster.ca/" ] [ img [ style "height" "100px", src "img/mcm-eng.png" ] [] ]
                        ]
                    , Grid.col [ Col.textAlign Text.alignXsCenter ]
                        [ a [ target "_blank", href "http://www.fields.utoronto.ca" ] [ img [ style "height" "100px", src "img/Fields_Logo_Medium.jpg" ] [] ]
                        ]
                    ]
                ]
            , Grid.col [ Col.textAlign Text.alignXsCenter ]
                [ Grid.row []
                    [ Grid.col []
                        [ h2 [ style "text-align" "center" ] [ text "Also check out:" ]
                        ]
                    ]
                , Grid.row [ Row.middleMd ]
                    [ Grid.col [ Col.textAlign Text.alignXsCenter ] 
                        [ a [ target "_blank", href "https://cariboutests.com/" ] [img [ style "height" "100px", src "img/CaribouContestLogo.png" ] [] ]
                        ]
                    , Grid.col [ Col.textAlign Text.alignXsCenter ]
                        [ a [ target "_blank", href "http://www.sciod.ca/" ] [ img [ style "height" "50px", src "img/sciod.png" ] [] ]
                        ]
                    , Grid.col [ Col.textAlign Text.alignXsCenter ]
                        [ a [ target "_blank", href "http://www.scienceliteracy.ca/" ] [ img [ style "height" "100px", src "img/sciLitWeek.png" ] [] ]
                        ]
                    ]
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
        , Grid.row []
            [ Grid.col [ Col.textAlign Text.alignSmCenter ]
                [ h5 [ style "font-weight" "600" ] [ text "Interested? Contact us at " ]
                , a [ href "mailto:mcmasteroutreach@gmail.com" ] [ h5 [ style "font-weight" "600", style "color" "rgb(197,11,93)" ] [ text "mcmasteroutreach@gmail.com" ] ]
                ]
            ]
        , Grid.row []
            -- empty row
            [ Grid.col []
                [ h1 [] [ text " " ]
                ]
            ]
        ]
    ]

bannerGif t =
  case modBy 8 (Time.posixToMillis t // 10000) of
    0 -> "img/GIF-WobbleCoolDemo.gif" 
    1 -> "img/PeelHospital2021.gif"
    2 -> "img/GIF-CarCoolDemo.gif" 
    3 -> "img/Word1.jpeg"
    4 -> "img/GIF-ClockCoolDemo.gif" 
    5 -> "img/PeelThanks2021.gif"
    6 -> "img/GIF-GooglyEyesCoolDemo.gif" 
    _ -> "img/PeelNY2021.gif" 

links2games : String -> String -> List ( String, String ) -> Html msg
links2games title imgurl links =
    Grid.container []
        [ Grid.row []
            [ Grid.col []
                [ h2 [ Spacing.mt4 ] [ text title ]
                ]
            ]
        , Grid.row []
            [ Grid.col [ Col.md9 ]
                [ img [ style "width" "100%", src imgurl ] []
                ]
            , Grid.col [ Col.md3, Col.middleMd ]
                (List.map oneLink links)
            ]
        ]

tagStyle = [style "line-height" "1.25", style "font-size" "30px", style "text-align" "center"]

leftBlock :  Html msg
leftBlock =
    Grid.container []
        [ Grid.row [ Row.centerLg, Row.attrs [ Size.w100, Spacing.py1 ] ]
            [ Grid.col []
                [ p tagStyle [text "$199/week" ]
                , p tagStyle [span [style "display" "inline-block"] [text "July 6 -"], text " ", span [style "display" "inline-block"] [text "August 27"]]
                , p tagStyle [span [style "display" "inline-block"] [text "Grades"], text " ", span [style "display" "inline-block"] [text "5 - 8"]]
                , Button.linkButton 
                    [Button.attrs [
                        Size.w100 
                        , style "float" "center"
                        , target "_blank"
                        , href "https://www.eng.mcmaster.ca/forms/mcmaster-start-coding-camp-2021"
                        , style "color" "white"
                        , style "font-size" "20px"
                        , style "background-color" "maroon"
                        , style "border-radius" "12px"
                    ]         
                    , Button.block] [text "Camp Store"]
                ]
            ]
        , Grid.row [ Row.attrs [ Spacing.py1 ] ]
            [ Grid.col []
                [ 
                ]
            ]
        
        {-
        , Grid.row [ Row.attrs [ Spacing.py1 ] ]
            [ Grid.col []
                [ Button.linkButton 
                    [Button.attrs [
                        Size.w100
                        , style "float" "center"
                        , href "#camps"
                        , style "color" "maroon"
                        , style "border-color" "maroon"
                        , style "border-radius" "12px"
                    ]         
                    , Button.block] [text "Camps Info"]
                ]
            ]
        , Grid.row [ Row.attrs [ Spacing.pb5Lg ] ]
            [ Grid.col []
                [ Button.linkButton 
                    [ Button.attrs [
                        Size.w25 
                        , style "float" "center"
                        , href "#lessons"
                        , style "color" "maroon"
                        , style "border-color" "maroon"
                        , style "border-radius" "12px"
                    , Spacing.px3
                    ]         
                    , Button.small] [text "Lessons Info"]
                , Button.linkButton 
                    [ Button.attrs [
                        Size.w25 
                        , style "float" "center"
                        , href "#camps"
                        , style "color" "maroon"
                        , style "border-color" "maroon"
                        , style "border-radius" "12px"
                    , Spacing.px3
                    ]         
                    , Button.small] [text "Camps Info"]
                ]
            ]
        , Grid.row [ Row.attrs [ Spacing.py1 ] ]
            [ Grid.col []
                [  h4 [ Spacing.mb2 ] [ text "Teachers:" ]
                , text "Sign up for May and June in-class workshops:"
                ]
            ]
        , Grid.row [ Row.attrs [ Spacing.py1 ] ]
            [ Grid.col []
                [ Button.linkButton 
                    [Button.attrs [
                        Size.w50  
                        , style "float" "center"
                        , style "padding" "5px"
                        , target "_blank"
                        , href "https://forms.gle/jacBCZS2vrSFwc9v8"
                        , style "color" "white"
                        , style "background-color" "maroon"
                        , style "border-radius" "12px"
                    ]         
                    , Button.block] [text "Free class visits"]
                ]
            ]
        , Grid.row [ Row.attrs [ Spacing.py1 ] ]
            [ Grid.col []
                [ Button.linkButton 
                    [ Button.attrs [
                        Size.w50 
                        , style "float" "center"
                        , style "padding" "5px"
                        , href "#classvisits"
                        , style "color" "maroon"
                        , style "border-color" "maroon"
                        , style "border-radius" "12px"
                    ]         
                    , Button.small] [text "Class Visit Info"]
                ]
            ]
        -}
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
