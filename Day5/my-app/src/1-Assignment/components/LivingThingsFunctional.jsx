import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function LivingThings() {
  return (
    <div>

      <Link to="users"><Button className="mb-2 mt-2 btnwd">
            Users
          </Button></Link>
       <br/>

       <Link to="birds"><Button className="mb-2 mt-2 btnwd">
          Birds
          </Button></Link>
          <br/>

       <Link to="employees">   <Button className="mb-2 mt-2 btnwd">
            Employees
          </Button>
        </Link>
          <br/>
          <Link to="animals"><Button className="mb-2 mt-2 btnwd">
            Animals
          </Button></Link>

    </div>
  );
}
