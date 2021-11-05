import List exposing (..)
import Graphics.Collage exposing(..)
import Graphics.Element exposing (..)
import Color exposing (..)
import Text exposing (fromString)

main = collage 900 900 [group <| showTree myTree 1 0]

showNode : String -> Float -> Float -> Form
showNode name numBranch numLR = group [
                      filled red (circle 30)
                          |> move (numLR*(165), numBranch*100 - 300),
                         toForm (show name)
                          |> move (numLR*(150), numBranch*100 - 350)
                         ]
                        
showTree : Tree -> Float -> Float -> List Form
showTree tree numBranch numLR = case tree of
                  (Node ss t1 t2) -> showNode ss numBranch numLR :: concat [showTree t1 (numBranch + 1) (numLR-(1/numBranch)), showTree t2 (numBranch + 1) (numLR+(1/numBranch))]
                  Nil -> []
   
type Tree = Node String Tree Tree | Nil

myTree : Tree
myTree = Node "Anirudh" 
                  (Node "Manish" Nil Nil)
                  (Node "Deepa" Nil Nil)