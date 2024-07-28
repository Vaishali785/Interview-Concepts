# useEffect vs useLayoutEffect

<pre>
    useEffect(()=>{
        console.log("useEffect 1");
    },[])
    useEffect(()=>{
        console.log("useEffect 2");
    },[])
    useLayoutEffect(()=>{
        console.log("useLayEffect 1");
    },[])
    useLayoutEffect(()=>{
        console.log("useLayEffect 1");
    },[])
    console.log("rendering");

-- Output --

	rendering
	useLayEffect 1
	useLayEffect 1
	useEffect 1
	useEffect 2
</pre>
