import IsUnique from "../problems/chapter_1/11_IsUnique.js"
import * as assert from "assert";


describe('IsUnique', function() {
    it('should return true', function() {
        assert.strictEqual(IsUnique([1,2,3,4,5,6]), true)
    })
    it('should return true', function() {
        assert.strictEqual(IsUnique([6,4,3,22,7]), true)
    })

    it('should return false', function() {
        assert.strictEqual(IsUnique([1,2,2,2,3,4,5,6]), false)
    })

    it('should return false', function() {
        assert.strictEqual(IsUnique([4,2,1,55,5,5,5,0,9]), false)
    })


})
