all : complie test

complie :
	tsc --module commonjs ./*.ts 

test :
	mocha test/*.js

clean :
	rm ./InputStream.js ./Tokenenize.js
