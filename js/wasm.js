Module.onRuntimeInitialized = _ => {
    const findpath_bfs = Module.cwrap('findpath_bfs', null, ['number','array']);
    console.log(Module)
    console.log(findpath_bfs(4));
    arrayDataToPass=[1,2,3,4,5,6,7,8,9,10]
    let typedArray = new Uint8Array(width * height);

    const typedArray = new Float32Array(arrayDataToPass.length)
console.log(typedArray);
    // Populate the array with the values
    for (let i=0; i<arrayDataToPass.length; i++) {
        typedArray[i] = arrayDataToPass[i]
    }

    // Allocate some space in the heap for the data (making sure to use the appropriate memory size of the elements)
    buffer = Module._malloc(typedArray.length * typedArray.BYTES_PER_ELEMENT)
    console.log(buffer);
    // Assign the data to the heap - Keep in mind bytes per element
    Module.HEAPF32.set(typedArray, buffer >> 2)

    // Finally, call the function with "number" parameter type for the array (the pointer), and an extra length parameter
    result = Module.ccall("addNums", null, ["number", "number"], [buffer, arrayDataToPass.length])




  };    