
![](https://lh5.googleusercontent.com/JSTl67RcjHZ93HLt5VlaWdmAke3FPhuXVyRUCUHBfxvgZjDFV5tQkNtuBYBqoU_80hUE5ZvL1ArKB0t3fiSvq-3IUlh5viE030O9rXYCRVJGn2drcOFdEw0N153dz58Mq21znu_M)

This component is used to remove bad data when the “remove bad data” is set to true. This component accepts an initial array of numbers, must be run more than once to check for Bad Data as the first call stores the number of elements in the input data always resulting in ture. Bad Data return true if multiple data points are equal; the array out will be array in without the repeated data. The ratio would be out of the entire array in how much of it were bad data.
