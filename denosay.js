#!/usr/bin/env node
let userInput = process.argv.slice(2).join(" ").toString();

for (let i = 0, len = 6; i < len; i++) {
	process.stdout.write("-");
}
for (let a = 0, len = userInput.length; a < len; a++) {
	process.stdout.write("-");
}
console.log("");
process.stdout.write("< ");
process.stdout.write(userInput);
process.stdout.write(" >");
console.log("");
for (let a = 0, len = userInput.length; a < len; a++) {
	process.stdout.write("-");
}
for (let i = 0, len = 6; i < len; i++) {
	process.stdout.write("-");
}
let deno = `
           \\
            \\
             \\
               \_\_\_ 
              (_ •)                         
                | |    
                | | 
                | |_______ _
                |         |_\\
                |         | 
                |_|‾‾‾‾‾|_|    
`;

console.log(deno);
