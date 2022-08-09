/** Arrays */
function getSecondLargest(nums) {
    nums.sort((a, b) => {
        if (a < b) return -1
        if (a > b) return 1
        return 0
    })
    nums = nums.filter(num => num < nums[nums.length -1])
    return nums[nums.length - 1]
}

/** Try, Catch, and Finally */
function reverseString(s) {
    try{
        s = s.split('')
        s = s.reverse()
        s = s.join('')
    } catch (err) {
        console.log(err.message)
    } finally {
        console.log(s)
    }
}

/** Throw */
function isPositive(a) {
    if (a > 0) return 'YES'
    else if (a < 0) throw new Error('Negative Error')
    else throw new Error('Zero Error')
}