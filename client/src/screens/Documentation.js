import React from 'react';
import Card from "../components/Card/Card";

const Documentation = (props) => {
  return (
    <div>
      <Card>This is the documentation section for this API. To use any of the endpoints below, you will need to sign in and create an account.</Card>
      <Card> api/current - gives you access to the current number in the sequence</Card>
      <Card> api/next - gives you access to the current number in the sequence + 1</Card>
      <Card> api/set - allows you set the number to any number you desire</Card>
    </div>
  )
};

export default Documentation;