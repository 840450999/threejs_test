#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <windows.h>
int main(int argc, char const *argv[])
{
    SetConsoleOutputCP(65001);
    system("node ./server/index.js");
    return 0;
}
