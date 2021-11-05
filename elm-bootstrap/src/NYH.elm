module NYH exposing (page)

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
            [ h1 [ Spacing.my5 ] [ text "New Youth Hack" ]
            ]
        , Grid.col [ Col.xs3 ]
            [ a [ href "http://bmccentre.org/" ] [ img [ style "width" "100px", src "img/BMClogo.png" ] [] ]
            ]
        ]
    , Grid.row []
        -- empty row
        [ Grid.col []
            [ h1 [] [ text " " ]
            ]
        ]
    , Grid.row []
        [ Grid.col []
            [ text "In 2018-2019 we partnered with Brampton Multicultural Community Centre (BMC) to apply Design Thinking (DT) to reimagining settlement services for refugee and immigrant youth in Canada.  One insight motivating DT is that design is a series of experiments in which we learn about our users. Iterative prototyping and user feedback are paramount. "
            , a [ href "http://bmccentre.org/wp-content/uploads/2018/08/NewYouthHack_Flyer2018.pdf" ] [ text "BMC recruited 30 New Youth, aged 15 to 20, speaking 10 languages." ]
            ]
        , Grid.col [] [ img [ style "width" "500px", src "img/DoubleDiamond.png" ] [] ]
        ]
    , Grid.row []
        -- empty row
        [ Grid.col []
            [ h1 [] [ text " " ]
            ]
        ]
    , Grid.row []
        [ Grid.col [] [ a [ target "_blank", href "https://github.com/CSchank/petri-app-land" ] [ text "Petri App Land (GitHub)" ] ]
        , Grid.col []
            [ text "But we also wanted to expose them to career pathways related to software design and development.  To do this we created a Model Driven Development framework called Petri App Land (PAL), leveraging our experience using State Diagrams to explain the implementation of interaction in Elm apps.  "
            ]
        ]
    , Grid.row []
        -- empty row
        [ Grid.col []
            [ h1 [] [ text " " ]
            ]
        ]
    , Grid.row []
        [ Grid.col []
            [ text "After DT training for BMC staff, McMaster student volunteers and community mentors, we launched with a 2-day design-a-thon called NewYouthHack.  Twelve teams each settled on a problem, and made an initial presentation at the end of the first day."
            , a [ href "https://twitter.com/BMC_and_MCS/status/1058722112813350912" ] [ text "Videos." ]
            ]
        , Grid.col [] [ img [ style "width" "500px", src "img/NYH3.jpg" ] [] ]
        ]
    , Grid.row []
        -- empty row
        [ Grid.col []
            [ h1 [] [ text " " ]
            ]
        ]
    , Grid.row []
        [ Grid.col []
            [ ol [] <|
                List.map (\txt -> li [] [ text txt ])
                    [ "Technology learning for academic success"
                    , "Information on courses - career pathways"
                    , "Connections, mentorship at institutions"
                    , "An app to make and submit resumes"
                    , "Employer interaction, interviews, networking and hiring"
                    , "Social interaction, services and events"
                    , "Information on transit, maps and attractions"
                    , "Vlog to help with school system and settlement"
                    , "Multi-lingual resource to find friends and resources"
                    , "Find volunteer opportunities, activities and interests"
                    , "Community-specific multi-lingual interaction"
                    , "Build connections and get information on services"
                    ]
            ]
        ]
    , Grid.row []
        [ Grid.col []
            [ a [ target "_blank", href "https://macoutreach.rocks/MathPathways.html" ] [ img [ style "width" "200px", src "img/MathPathways.png" ] [] ] ]
        , Grid.col []
            [ text "One of the ideas involved explaining course pathways to NewYouth and their parents who were not used to having choices in secondary education.  During the hackathon, we created a prototype.  (Click to see live version.) "
            ]
        ]
    , Grid.row []
        -- empty row
        [ Grid.col []
            [ h1 [] [ text " " ]
            ]
        ]
    , Grid.row []
        [ Grid.col []
            [ text "Most of the ideas generated at the design-a-thon involved mentorship and networking, requiring significant server-side logic.  In parallel with this development, we ran coding workshops for the NewYouth, including opportunities for them to create enhancements for our AvatarCreator.  Following the integration of these development efforts, we held focus groups, and small-group feedback sessions over several months." ]
        , Grid.col []
            [ a [ href "https://twitter.com/BMC_and_MCS/status/1055653877612249088" ] [ text "Training and Coding" ] ]
        ]
    , Grid.row []
        -- empty row
        [ Grid.col []
            [ h5 [] [ text " " ]
            ]
        ]
    , Grid.row []
        [ Grid.col []
            [ img [ style "width" "500px", src "img/NYH1.jpg" ] []
            ]
        , Grid.col []
            [ img [ style "width" "500px", src "img/NYH.jpg" ] []
            ]
        ]
    , Grid.row []
        -- empty row
        [ Grid.col []
            [ h1 [] [ text " " ]
            ]
        ]
    , Grid.row []
        [ Grid.col []
            [ p [] [ text "To quote the independent evaluator's findings that the NewYouthHack Project achieved its objectives in both developing ideas and empowering youth:" ]
            , ol [] <|
                List.map (\txt -> li [] [ text txt ])
                    [ "Successfully developed an app that aims to assist newcomer youth in multiple areas such as careers, education pathways, volunteer engagement and access to programs and services."
                    , "The successful launching and implementing of the app now depends on: 1) securing additional funding to further engage in consultation with relevant stakeholders, 2) piloting the app to fine-tune, 3) implementing locally in Peel and 4) scaling it up by implementing the app in Ontario and Canada."
                    , "Collaboration and partnership with multiple stakeholders in the community contributed to the successful implementation of the NewYouthHack project that brought sponsorships, stakeholder participation and feedback."
                    , "The initiative helped engage newcomer youth from diverse background that spoke 10 different languages and included disabled and LGBTQ persons."
                    , "An environment of trust and safety was created by BMC to address the concerns of parents of the newcomer youth ensuring their full participation."
                    , "The project provided a platform for newcomer youth to 1) develop a sense of belonging to their new home in Canada, 2) know that they are not alone; 3) open up to share their opinion freely on issues facing newcomer youth at and subsequent to the hackathon; 4) learn, identify, analyse and find solutions to the problems in their day to day life; and 5) expand their social networks."
                    ]
            ]
        ]
    , Grid.row []
        -- empty row
        [ Grid.col []
            [ h4 [] [ text " " ]
            ]
        ]
    , Grid.row []
        [ Grid.col []
            [ text "And we had fun doing it!!!" ]
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
            [ a [ href "https://www.facebook.com/pg/NewYouthHack/posts/" ] [ text "Celebration Video" ] ]
        ]
    , Grid.row []
        [ Grid.col [] []
        , Grid.col [ Col.xs11 ]
            [ a [ href "https://twitter.com/BMC_and_MCS/status/1058729050917797888" ] [ text "Fun moments" ] ]
        ]
    , Grid.row []
        -- empty row
        [ Grid.col []
            [ h2 [] [ text " " ]
            ]
        ]
    ]
