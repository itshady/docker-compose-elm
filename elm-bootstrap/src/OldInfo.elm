module OldInfo exposing (..)module OldInfo where


        --Stephanie
        , Grid.row []
            [ Grid.col [ Col.md12 ]
                [ Card.config []
                    |> Card.headerH3 [ style "color" "crimson", style "font-weight" "700" ] [ text "McMaster Women in Tech: Stephanie Koehl" ]
                    |> Card.block []
                        [ Block.text [] [ text "Stephanie has been a long time volunteer with McMaster Start Coding. She has helped the team develop curriculum and been involved with maintaining our social media presence as our photographer and videographer! Over the years, she has taught and helped in countless workshops, our summer camps, and our comics event. We are so proud of you, Stephanie!" ]
                        , Block.link [ target "_blank", href "https://cto.mcmaster.ca/mcmaster-women-in-tech-stephanie-koehl/" ] [ text "Read more." ]
                        ]
                    |> Card.view
                ]
            ]

        -- adding toast and snowman
        , Grid.row []
            [ Grid.col [ Col.md6 ]
                [ Card.config []
                    |> Card.headerH3 [ style "color" "crimson", style "font-weight" "700" ] [ text "Herogram Hackathon" ]
                    |> Card.block []
                        [ Block.custom
                            (links2games "Make an e-card"
                                "img/herogram-example.png"
                                [ ( "See how it flips", "https://macoutreach.rocks/share/befbc647" )
                                ]
                            )
                        , Block.link [ target "_blank", href "https://forms.gle/cRMuvvjkNhf5vjV89" ] [ text "Sign me up!" ]
                        ]
                    |> Card.view
                ]
            , Grid.col [ Col.md6 ]
                [ Card.config []
                    |> Card.headerH3 [ style "color" "crimson", style "font-weight" "700" ] [ text "3D Summer Camp: Coming soon!" ]
                    |> Card.block []
                        [ Block.custom
                            (Grid.container []
                                [ Grid.row []
                                    [ Grid.col []
                                        [ h2 [ Spacing.mt4 ] [ text "Make pictures and games in 3D." ]
                                        ]
                                    ]
                                , Grid.row []
                                    [ Grid.col [ Col.md6 ]
                                        [ img [ style "width" "100%", src "img/Snowman.png" ] []
                                        ]
                                    , Grid.col [ Col.md6, Col.middleMd ]
                                        [ img [ style "width" "100%", src "img/House.png" ] [] ]
                                    ]
                                ]
                            )
                        , Block.link [ target "_blank", href "https://forms.gle/XF4eZ6RXHioH54q48" ] [ text "Apply for camp!" ]
                        ]
                    |> Card.view
                ]
            ]

        -- beginning of stats
        , Grid.row []
            [ Grid.col [ Col.md6 ]
                [ Card.config []
                    |> Card.block []
                        [ Block.custom <|
                            Widget.icon "Stats"
                                100
                                30
                                [ SVGPictures.girlHuman |> GSVG.scale 0.2 |> GSVG.move ( -45, 0 )
                                , SVGPictures.boyHuman |> GSVG.scale 0.2 |> GSVG.move ( 45, 0 )
                                , GSVG.text "16,493 new coders"
                                    |> GSVG.sansserif
                                    |> GSVG.size 8
                                    |> GSVG.centered
                                    |> GSVG.filled (GSVG.rgb 112 20 60)
                                    |> GSVG.move ( 0, 5 )
                                , GSVG.text "from 738 classes"
                                    |> GSVG.sansserif
                                    |> GSVG.size 8
                                    |> GSVG.centered
                                    |> GSVG.filled (GSVG.rgb 112 20 60)
                                    |> GSVG.move ( 0, -12 )
                                ]
                        ]
                    |> Card.view
                ]
            , Grid.col [ Col.md6 ]
                [ Card.config []
                    |> Card.headerH3 [ style "color" "crimson", style "font-weight" "700" ] [ text "Latest Trailer" ]
                    |> Card.block [ Block.attrs [ style "padding-bottom" "18px" ] ]
                        [ Block.text [] [ text "Watch four weeks of work creating Escape Math Island at our Internship-Style Summer Camp in 52 seconds." ]
                        , Block.custom <| Button.button [ Button.small, Button.primary, Button.onClick OpenVideo, Button.attrs [ style "margin-right" "10px", style "padding-bottom" "0px", style "margin-top" "-5px" ] ] [ text "View trailer" ]
                        , Block.link [ target "_blank", href "https://macoutreach.rocks/escapemathisland" ] [ text "Play Game." ]
                        ]
                    |> Card.view
                ]
            , Grid.col []
                [ Modal.config CloseVideo
                    |> Modal.large
                    |> Modal.hideOnBackdropClick True
                    |> Modal.h3 [] [ text "Trailer" ]
                    |> Modal.body []
                        [ video
                            [ style "width" "100%", controls True, autoplay False ]
                            [ source [ src "http://www.cas.mcmaster.ca/~anand/SummerCampTrailer.mp4" ] [] ]
                        ]
                    |> Modal.footer []
                        [ Button.button
                            [ Button.primary
                            , Button.attrs [ onClick CloseVideo ]
                            ]
                            [ text "Close" ]
                        ]
                    |> Modal.view model.videoState
                ]
            ]
        , Grid.row []
            --empty row
            [ Grid.col []
                [ h1 [] [ text "" ]
                ]
            ]

        -- NEWS
        --
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
                    |> Card.headerH3 [ style "color" "crimson", style "font-weight" "700" ] [ text "Science Literacy Week 2019" ]
                    |> Card.block []
                        [ Block.text [] [ text "Hackathon to create comics answering children's questions." ]
                        , Block.link [ target "_blank", href "#scilit2019" ] [ text "See comics." ]
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
                    |> Card.headerH3 [ style "color" "crimson", style "font-weight" "700" ] [ text "TFPIE 2019 Slides" ]
                    |> Card.block []
                        [ Block.text [] [ text "Modelling Distributed Computation with Petri Nets so Children Can Program Multiplayer Universes" ]
                        , Block.link [ target "_blank", href "https://wiki.tfpie.science.ru.nl/11:30_-_12:00" ] [ text "View slides." ]
                        ]
                    |> Card.view
                ]
            , Grid.col [ Col.md4 ]
                [ Card.config []
                    |> Card.headerH3 [ style "color" "crimson", style "font-weight" "700" ] [ text "Comics 2019 " ]
                    |> Card.block []
                        [ Block.text [] [ text "Comics created by kids on workshops 2019 " ]
                        , Block.link [ target "_blank", href "#comics2019" ] [ text "Learn More." ]
                        ]
                    |> Card.view
                ]
            , Grid.col [ Col.md4 ]
                [ Card.config []
                    |> Card.headerH3 [ style "color" "crimson", style "font-weight" "700" ] [ text "Wordathon 2019" ]
                    |> Card.block []
                        [ Block.text [] [ text "Wordathon for kids across Hamilton schools" ]
                        , Block.link [ target "_blank", href "#wordathon2019" ] [ text "Learn More." ]
                        ]
                    |> Card.view
                ]
            , Grid.col [ Col.md4 ]
                [ Card.config []
                    |> Card.headerH3 [ style "color" "crimson", style "font-weight" "700" ] [ text "New Youth Hack" ]
                    |> Card.block []
                        [ Block.text [] [ text "New Youth Hack! In partnership with Brampton Multicultural Community Center" ]
                        , Block.link [ target "_blank", href "#nyh" ] [ text "More Info." ]
                        ]
                    |> Card.view
                ]
 