import { getByDisplayValue } from "@testing-library/react";
import React from "react";

function ext() {
  return <div className="itemsub">Exterior(9)</div>;
}
function int() {
  return <div className="itemsub">Interior(10)</div>;
}

function all() {
  return (
    <a href="javascript:alert('Under Construction.. Stay Tuned ;)')">
      <div className="All">All Photos(36)</div>
    </a>
  );
}

function Card(props) {
  return (
    <div className={"cssbox item" + props.no}>
      {props.no == 2 ? ext() : ""}
      {props.no == 10 ? int() : ""}
      {props.no == 13 ? all() : ""}

      <a id={"image" + props.no} href={"#image" + props.no}>
        <img
          className={
            "cssbox_thumb " +
            (props.no === 1 ? "fimg " : "img ") +
            ((props.no > 5 && props.no < 10) || props.no > 13
              ? "hidden "
              : " ") +
            (props.no === 1 ? "fimg " : "img ")
          }
          src={props.address}
        />
        <span className="cssbox_full">
          <nav class="navbar navbar-expand-lg navbar-dark ">
            <a
              style={{ color: "grey" }}
              class="navbar-brand"
              href="javascript:alert('Under Construction.. Stay Tuned ;)')"
            >
              All Photos(36)
            </a>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class={"nav-item"}>
                  <a
                    class={
                      props.no > 0 && props.no < 10 ? " activ " : "nav-link "
                    }
                    href="#image1"
                  >
                    Exterior
                  </a>
                </li>
                <li class={"nav-item"}>
                  <a
                    class={
                      props.no > 9 && props.no < 20 ? " activ " : " nav-link"
                    }
                    href="#image10"
                  >
                    Interior
                  </a>
                </li>
                <li class={"nav-item"}>
                  <a
                    class={
                      props.no > 19 && props.no < 27 ? " activ " : "nav-link "
                    }
                    href="#image20"
                  >
                    Mechanical
                  </a>
                </li>
                <li class={"nav-item"}>
                  <a
                    class={
                      props.no > 26 && props.no < 33 ? " activ " : " nav-link"
                    }
                    href="#image32"
                  >
                    Docs
                  </a>
                </li>
                <li class={"nav-item"}>
                  <a
                    class={props.no > 32 ? " activ " : "nav-link "}
                    href="#image33"
                  >
                    Others
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <img className={"image" + props.no} src={props.address} />
        </span>
      </a>
      <a class="cssbox_close" href="#void"></a>
      <a class="cssbox_prev" href={"#image" + (+props.no - 1)}>
        &lt;
      </a>
      <a class="cssbox_next" href={"#image" + (+props.no + 1)}>
        &gt;
      </a>
    </div>
  );
}

export default Card;
