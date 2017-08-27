Expression = op1:Term _ "+" _ op2:Expression {return op1 + op2}
			/ op1:Term _ "-" _ op2:Expression {return op1 - op2}
            / Term

Term = op1:Factor _ "*" _ op2:Term {return op1 * op2} 
		/ op1:Factor _ "/" _ op2:Term {return op1 / op2}
    	/ Factor

Factor = Constant
        / "-" _ op:Factor {return -op}
    	/ "(" _ op:Expression _ ")" {return op;}

Constant = ([0-9])+ ('.'([0-9])+)? {return parseFloat(text());}

_ = ' '*
