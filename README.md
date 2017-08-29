# Simple Math Parser

This is a peg.js simplified adaptation of the parser I built for my Systems' Design project.

It does not fare well with multiple nested parentheses (there is a considerable performance drop around the 7th pair).

It should also be noted that on same precedence level operations it favors the right hand side one. That  is, 27 / 9 / 3 would equal 9 and not 1.
