![](https://lh4.googleusercontent.com/dKLp2EDBK9KmnF6by66aLZj6ICC_WJDJaE2eflQSCSASHDsg3wrRAx9TxytGoEdHlnXg9zsIyVO3fsphfZPY6xqj-Vz39MNM7Exaec1KDIZO2qGgRaNea5XscNwZC_Zy0F1w2zP_)

  

This component will specify a specific portion of the input array and output that data in an array format. The portion will correspond to the section of the input array specified by the signal and cut index, if neither index is supplied then the array out will be a copy array in. The signal index specifies the row while cut index specifies the column of the input array. Indexing starting at zero. This component can be used when the initial values are not needed and can be omitted.

  

![](https://lh4.googleusercontent.com/8p4lOA4StNTWFK1C8hJ3KPJkQCJgNqQEkmQlUCxZgI-GESPyu_yXfDccRd3oNW3TcE-0BLTVa95wtpFlOS3-cn7LbWKAPp6OkNG2dy38hkrrYXpjo-2dzfSS_epZsyvdPY5DL-iS)

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

