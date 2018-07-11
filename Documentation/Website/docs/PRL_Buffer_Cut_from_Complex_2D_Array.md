![](https://lh3.googleusercontent.com/86EKDp2mZfFzR_N9pK-o2UDsXs8zGtchIo12dj7hi6ZajYryDMSOsFXKQDdKXNSXGgMW0l0uCUMLTLEiGjmyO-m59vKsT4KTHZvlNRw92mOvpM8bd0qetbjUFdh8t35wnZkNmI_P)

This component will specify a specific portion of the input array consisting of complex numbers and output that data in an array format. The portion specified will correspond to the section of the input array specified by the signal and cut index, if neither index is supplied then the array out will match the array in. The signal index specifies the row while cut index specifies the column of the input array. Indexing starting at zero.This component can be used when the initial values are not needed and can be omitted.

![](https://lh3.googleusercontent.com/OpJer8a8YbXI0DP6iXu9vqLGUECVJvpq_b3Z5f2Ieaw8PRxa1sFsXxvCNYmh02n79woTzIis-kj3iBrlOU0oqOp3f1uZK6cSzjRt1u8VJjtFGnTCZ3USsFXg5Xevv3I0WogMQg9G)

Input:
|  |  |
|---|---|
| Array in | A 2D array filled with numerical controllers |
| Signal Index | A 1D array of numerical indicators |
| Cut index | A 1D array of numerical indicators |

Output:
|  |  |
|---|---|
| Array Out | A 1D array filled with numerical indicators, this array is a portion of the array in |
