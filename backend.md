# Backend

A guest is transferring a file that is S megabytes in size. Your job is to create a function that estimates the remaining time in seconds to finish transferring the file.

The software records amounts of transferred size in megabytes each second (M).

If the file is not finished transferring yet, then estimate the rate by taking the simple average of the last C observations. C is an integer.

You may assume that all the values are reasonable.


Write a function:

Function fileTransfer(S, M, C)

That returns the amount of time remaining in seconds.

S is an integer that represents the file size in megabytes.

M is an array of integers that displays the megabytes transferred at each second starting from the beginning of the transfer until now.

C is an integer.

You may assume that all the values are reasonable.




Example:

    S = 200, M = [20, 12, 12, 16], C = 2
    60 megabytes = 20 + 12 + 12 + 16 have been transferred.
    So 140 megabytes remain.
    The average of the last two seconds (C = 2) is 14 = (12 + 16) / 2.
    So the function should return 10 seconds( = 140/14)


Note that:

    If there are fewer than C observations, use what you do have
    Your estimate should be rounded up to the nearest integer (ceiling)
    If the file is transferred, return 0
    If you are unable to produce an estimate, return -1
