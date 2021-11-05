import List exposing (..)
import Graphics.Collage exposing(..)
import Graphics.Element exposing (..)
import Color exposing (..)
import Text exposing (fromString)

main = collage 300 300 [mkRect 4 20]

mkRect height extendBack = group 
                           [ 
                             polygon 
                               [
                                 (-15,0)
                                 ,(-15,Basics.toFloat height *30)
                                 ,((-10+extendBack),(Basics.toFloat height *30)+5)
                                 ,(20+extendBack,(Basics.toFloat height *30)+5)
                                 ,(20+extendBack,5)
                                 ,(15,0)
                               ]
                               |> filled red
                           , path 
                               [
                                 (-15,0)
                                 ,(-15,Basics.toFloat height*30)
                                 ,(-10+extendBack,(Basics.toFloat height *30)+5)
                                 ,(20+extendBack,(Basics.toFloat height *30)+5)
                                 ,(15,(Basics.toFloat height *30))
                                 ,(-15,(Basics.toFloat height *30))
                                 ,(15,(Basics.toFloat height *30))
                                 ,(15,0)
                                 ,(20+extendBack,5)
                                 ,(20+extendBack,(Basics.toFloat height *30)+5)
                                 ,(20+extendBack,5)
                                 ,(15,0)
                                 ,(-15,0)
                               ]
                               |> traced (solid black)
                           , (rect (30) (Basics.toFloat height*30))
                               |> filled lightRed
                               |> move (0,Basics.toFloat height*15)
                               
                           ]