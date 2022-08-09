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