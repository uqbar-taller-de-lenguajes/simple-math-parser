import { describe, it } from 'mocha'

import { expect } from 'chai'
import parse from '../src/parser'

describe('parser', () => {

    it('evaluates valid mathematical expressions', () => {
      expect(parse('3 + 4')).to.equal(7)
    })

    it('fails when given an invalid expression', () => {
      expect(() => parse('1 ++ 3')).to.throw()
    })

    describe('operator precedence', () => {
    
        it('prioritizes multiplication over addition', () => {
            expect(parse('3 + 4 * 5')).to.equal(23)
        })

        it('prioritizes division over addition', () => {
            expect(parse('3 + 8 / 4')).to.equal(5)
        })

        it('allows the use of parentheses to prioritize another operation', () => {
            expect(parse('(3 + 4) * 5')).to.equal(35)
        })

    })

})
