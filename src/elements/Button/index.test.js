import React from "react"; //info snipet -> imr
import { render } from "@testing-library/react";
import { BrowserRouter as Router} from 'react-router-dom';
import Button from "./index";
// test 1
test("Should not allowed click if isDisabled is present", () => {
    const{ container } = render (<Button isDisabled ></Button>);

    //cek container, apakah terdapat span disabled
    //toBeInTheDocument => memastikan test terdapat pada document
    expect( container.querySelector("span.disabled")).toBeInTheDocument();
});
//test 2
test("Should render loading/spinner", () => {
    //selain kontainer kita distrak, 1 variable dengan nama getByText
    const{ container, getByText} = render (<Button isLoading ></Button>);
    //expect untuk deteksi kata loading
    expect(getByText(/loading/i)).toBeInTheDocument()
    //cek container, apakah terdapat span disabled
    //toBeInTheDocument => memastikan test terdapat pada document
    expect( container.querySelector("span")).toBeInTheDocument();
});
//test 3
test("Should render <a> tag", () => {
    const{ container } = render (<Button href="#" type="link" isExternal ></Button>);

    //cek container, apakah terdapat <a>
    //toBeInTheDocument => memastikan test terdapat pada document
    expect(container.querySelector("a")).toBeInTheDocument();
});

//test 4
test("Should render <Link> component", () => {
    const{container} = render (
        <Router>
            <Button href="#" type="link" ></Button>
        </Router>
    );
    expect( container.querySelector("a")).toBeInTheDocument();//cek container, apakah terdapat <a>
    //toBeInTheDocument => memastikan test terdapat pada document
});