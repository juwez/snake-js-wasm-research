#include <iostream>
#include <vector>
#include <string>
#include <stdio.h>
#include <emscripten/emscripten.h>

using namespace std;

extern "C" {

class Point {
    public:
    int pos_x;
    int pos_y;
    Point(int x, int y) 
    {
    pos_x = x;
    pos_y = y;
    }};
    
    int findpath_bfs(int size,int (*array)[20][20]) {
    cout << "Hello User, Enter your first name.\n ";
    cout << "Hello User, Enter your first name.\n ";
    int age = 18;
    cout << "Hello User, Enter your first name.\n ";
    cout << "Hello User, Enter your first name.\n ";
    cout << "Hello User, Enter your first name.\n ";
    cout << "Hello User, Enter your first name.\n ";
    uint8_t aa = 5;
    cout << aa;
    cout << endl << "value is "<< +int(aa) <<endl;
    std::cout << size;
    std::cout << size;
    std::cout << size;
    std::cout << size;
    
    for(int i = 0; i < 3; i++){
    for(int j = 0; j < 4; j++){
        std::cout << array[i][j];
    }
    }
    return size;



}

}
