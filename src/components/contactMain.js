import React from 'react';
import ContactInfo from './contactInfo';
import ContactDetails from './contactDetails';

export default class ContactMain extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedKey: -1,
      keyword: '',
      contactData: [{
        name: 'Green',
        phone: '010-0000-0001'
      }, {
        name: 'Red',
        phone: '010-0000-0002'
      }, {
        name: 'Black',
        phone: '010-0000-0003'
      }, {
        name: 'Yellow',
        phone: '010-0000-0004'
      }]
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };

  handleChange(e) {
    this.setState({
      keyword: e.target.value
    });
  }

  handleClick(key) {
    this.setState({
      selectedKey: key
    }); //selectedKey를 받은 파라미터(key)로 바꿔줌
    console.log(key, 'is selected');
  }


  render() {
    const mapToComponents = (data) => {
      data.sort();
      data = data.filter(
        (contact) => {
          return contact.name.toLowerCase()
            .indexOf(this.state.keyword.toLowerCase()) > -1;
        }
      );
      return data.map((contact, i) => {
        return (<ContactInfo contact={contact} key={i} onClick={() => this.handleClick(i)}/>);
      });
    };

    return(
      <div>
        <h1>Contacts</h1>
        <input
          name="keyword"
          placeholder="Search"
          value={this.state.keyword}
          onChange={this.handleChange}
        />
        <div>{mapToComponents(this.state.contactData)}</div>
        <ContactDetails isSelected={this.state.selectedKey != -1}
                        contact={this.state.contactData[this.state.selectedKey]}/>
      </div>
    );
  }

}
