import React from 'react';

class HeaderData extends React.Component {
  static top_name = "Amazing Trivia"; // Change the top name
  static part_one = "Category 1"; // Change the first part name

  getname() {
    return this.top_name;
  }
}

export default HeaderData;
