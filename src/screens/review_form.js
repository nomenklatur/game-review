import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { globalStyles } from '../utils/styles/global';
import { Formik } from 'formik';
import { ReviewSchema } from '../services/validations/review_schema';
import { ADD_BUTTON } from '../utils/const/buttons';
import Button from '../components/button';

export default function ReviewForm({ addReview }) {
    return (
        <View>
            <Formik
                validationSchema={ReviewSchema}
                initialValues={{ title: '', body: '', rating: ''}}
                onSubmit={(values) => {
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
                        onBlur={props.handleBlur('title')}
                    />
                    <Text style={globalStyles.errorText}> { props.touched.title && props.errors.title } </Text>
                    {/* above code will only output the text if and only if both conditions are true */}
                    <TextInput 
                        style={globalStyles.input}
                        placeholder='Review Body'
                        onChangeText={props.handleChange('body')}
                        value={props.values.body}
                        onBlur={props.handleBlur('body')}
                    />
                    <Text style={globalStyles.errorText}> { props.touched.body && props.errors.body } </Text>
                    <TextInput 
                        style={globalStyles.input}
                        placeholder='Game Rating'
                        onChangeText={props.handleChange('rating')}
                        value={props.values.rating}
                        onBlur={props.handleBlur('rating')}
                        keyboardType='numeric'
                    />
                    <Text style={globalStyles.errorText}> { props.touched.rating && props.errors.rating } </Text>
                    <Button buttonType={ADD_BUTTON} handlerFunc={props.handleSubmit} />
                </View>
            )}
            </Formik>
        </View>
    )
}
