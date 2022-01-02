module Utils exposing (..)

import Dict 
import String 

type alias Link = String
type alias Description = String
type alias BulletPoint = String
type alias ButtonFace = String

type PreHtml = PreTxt String | PreLink Link


escapeHtml : String -> String
escapeHtml =
    convert escapeHtmlDictionary

escapeUrl : String -> String
escapeUrl =
    convert escapeUrlDictionary

convert : Dict.Dict Char String -> String -> String
convert dict string =
    string
        |> String.toList
        |> List.map (\ char -> Maybe.withDefault (String.fromChar char) (Dict.get char dict))
        |> String.concat

{- dictionary that keeps track of the characters that need to be escaped -}


escapeHtmlDictionary : Dict.Dict Char String
escapeHtmlDictionary =
    Dict.fromList <|
            [ ( '&', "&amp;" )
            , ( '<', "&lt;" )
            , ( '>', "&gt;" )
            , ( '"', "&quot;" )
            , ( '\'', "&#39;" )
            , ( '`', "&#96;" )
            , ( ' ', "&#32;" )
            , ( '!', "&#33;" )
            , ( '@', "&#64;" )
            , ( '$', "&#36;" )
            , ( '%', "&#37;" )
            , ( '(', "&#40;" )
            , ( ')', "&#41;" )
            , ( '=', "&#61;" )
            , ( '+', "&#43;" )
            , ( '{', "&#123;" )
            , ( '}', "&#125;" )
            , ( '[', "&#91;" )
            , ( ']', "&#93;" )
            ]

escapeUrlDictionary : Dict.Dict Char String
escapeUrlDictionary =
    Dict.fromList <|
            [ ( '&', "%26" )
            , ( '<', "%3C" )
            , ( '>', "%3E" )
            , ( '"', "%22" )
            , ( '\'', "%5C" )
            , ( '`', "%60" )
            , ( ' ', "%20" )
            , ( '!', "!" )
            , ( '@', "%40" )
            , ( '$', "%24" )
            , ( '%', "%25" )
            , ( '=', "%3D" )
            , ( '+', "%2B" )
            , ( '{', "%7B" )
            , ( '}', "%7D" )
            , ( '[', "%5B" )
            , ( ']', "%5D" )
            ]
