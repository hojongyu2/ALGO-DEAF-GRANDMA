import re
def grandma():
    count = 0
    granny = input("HEY KID!")
    while count < 2:
        response = input()
        if response == "":
            print("what!")
        elif re.search("[a-z]", response):
            print("SPEAK UP, KID!")
        elif response == response.upper() and not response == "GOODBYE!":
            print("NO, NOT SINCE 1946!")
        elif response == "GOODBYE!":
            count += 1
            print("LEAVING SO SOON?")
    return("LATER, SKATER!")
print(grandma())
