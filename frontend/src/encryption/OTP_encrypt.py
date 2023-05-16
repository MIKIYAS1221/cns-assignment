import sys
import onetimepad

if __name__ == "__main__":
    msg = sys.argv[1]
    key = sys.argv[2]
    encrypted_msg = onetimepad.encrypt(msg, key)
    print(encrypted_msg)
    
