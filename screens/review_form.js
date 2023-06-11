import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';

export default function ReviewForm({ addReview }) {
    return (
        <View>
            <Formik
                initialValues={{ title: '', body: '', rating: ''}}
                onSubmit={(values) => {
                    //actions.resetForm() to reset forms
                    addReview(values);
                }}
            >
            { (props) => (
                <View>
                    <TextInput 
                        style={globalStyles.input}
                        placeholder='Game Title'
                        onChangeText={props.handleChange('title')}
                        value={props.values.title}
                    />
                    <TextInput 
                        style={globalStyles.input}
                        placeholder='Review Body'
                        onChangeText={props.handleChange('body')}
                        value={props.values.body}
                    />
                    <TextInput 
                        style={globalStyles.input}
                        placeholder='Game Rating'
                        onChangeText={props.handleChange('rating')}
                        value={props.values.rating}
                        keyboardType='numeric'
                    />
                    <TouchableOpacity activeOpacity={0.95} style={globalStyles.button} onPress={props.handleSubmit}>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>
            )}
            </Formik>
        </View>
    )
}
