# Variables and Functions Lab

## Reflection

### 1. How did you make your functions more flexible?

I used parameters so I could try different values with the same function. For `formatFullName`, I tried my full name first. Then I left out my last name to see if the function would catch it.

### 2. What challenges did you face with conditional logic?

I had to think about what should happen when someone is exactly 18. I checked the age first because a person who is 18 isn’t eligible, even if they have a job. I also missed the second `c` in `checkEligibility`. I fixed the spelling and ran the code again.

### 3. How does refactoring make your code easier to read and maintain?

At first, I wasn’t sure why we needed `discount = 0`. After testing both cases, I understood that zero is what the function uses when I leave out the discount. Now both cases use the same tax calculation, so I only have one place to update it later.
