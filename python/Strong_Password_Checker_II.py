# A password is said to be strong if it satisfies all the following criteria:

# It has at least 8 characters.
# It contains at least one lowercase letter.
# It contains at least one uppercase letter.
# It contains at least one digit.
# It contains at least one special character. The special characters are the characters in the following string: "!@#$%^&*()-+".
# It does not contain 2 of the same character in adjacent positions (i.e., "aab" violates this condition, but "aba" does not).
# Given a string password, return true if it is a strong password. Otherwise, return false.
class Solution:
    def strongPasswordCheckerII(self, password: str) -> bool:
        result = {'has_lower': False,'has_upper': False,'has_digit':False,'has_special':False}
        if len(password) < 8:
            return False
        for idx,char in enumerate(password):
            if char.islower():
                result['has_lower'] = True
            elif char.isupper():
                result['has_upper'] = True
            elif char.isdigit():
                result['has_digit'] = True
            elif char in '!@#$%^&*()-+':
                result['has_special'] = True
            if idx > 0 and char == password[idx - 1]:
                return False
        if False in result.values():
            return False
        return True
    
sd = Solution()
sd.strongPasswordCheckerII("IloveLe3tcode!")  # True
sd.strongPasswordCheckerII("Me+You--IsMyDream")  # False
