import React, { Component } from 'react';
import { Container, Accordion, Text, View } from 'native-base';

class MeuAcordeao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataArray: [
                { title: 'Item 1', content: 'Conteúdo do Item 1' },
                { title: 'Item 2', content: 'Conteúdo do Item 2' },
                { title: 'Item 3', content: 'Conteúdo do Item 3' },
            ],
        };
    }

    render() {
        return (
            <Container>
                <Container>
                </Container>
                <Container padder>
                    <Accordion
                        dataArray={this.state.dataArray}
                        expanded={0}
                        renderHeader={this._renderHeader}
                        renderContent={this._renderContent}
                    />
                </Container>
            </Container>
        );
    }

    _renderHeader(item, expanded) {
        return (
            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#A9DAD6' }}>
                <Text style={{ fontWeight: '600' }}>
                    {' '}{item.title}
                </Text>
                {expanded
                    ? <Text style={{ fontSize: 18 }} name="remove-circle" >-</Text>
                    : <Text style={{ fontSize: 18 }} name="add-circle" >+</Text>}
            </View>
        );
    }

    _renderContent(item) {
        return (
            <Text
                style={{
                    backgroundColor: '#e3f1f1',
                    padding: 10,
                    fontStyle: 'italic',
                }}
            >
                {item.content}
            </Text>
        );
    }
}

export default MeuAcordeao;
