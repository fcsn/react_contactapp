import React from 'react';
import ContactInfo from './contactInfo';

export default class ContactMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  };

  render() {
    const mapToComponents = (data) => {
      return data.map((contact, i) => {
        return (<ContactInfo contact={contact} key={i}/>);
      });
    };

    return(
      <div>
        <h1>Contacts</h1>
        <div>{mapToComponents(this.state.contactData)}</div>
      </div>
    );
  }

}
