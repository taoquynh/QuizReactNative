/**
 * Màn quiz
 */

import React, { useState, useEffect } from 'react';
import { View, StatusBar, SafeAreaView, StyleSheet, Text, Animated, Alert } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import questions from './data/Data'

const getRemaining = (time) => {
    return { secs: `${time}` }
}

function QuizScreen({ navigation }) {
    const [remainingSecs, setRemainingSecs] = useState(10)
    const [isStart, setIsStart] = useState(false)
    const { secs } = getRemaining(remainingSecs)
    const [numberQuestion, setNumberQuestion] = useState(1)
    const [point, setPoint] = useState(0)

    toggle = () => {
        setIsStart(!isStart)
    }

    changeQuestion = (index) => {
        if (questions[numberQuestion - 1].correctAnswer - 1 == index) {
            setPoint(point => point + 1)
        }
        nextQuestion()
    }

    nextQuestion = () => {
        if (numberQuestion < questions.length) {
            setNumberQuestion(numberQuestion => numberQuestion + 1)
            setIsStart(true)
            setRemainingSecs(10)
        } else {
            toggle()
            navigation.navigate('Result', {
                name: 'Result',
                point: point,
                total: questions.length,
                onGoBack: () => this.refresh()
            })
        }
    }

    useEffect(() => {
        toggle()
    }, [])

    useEffect(() => {
        let interval = null
        if (isStart) {
            interval = setInterval(() => {
                if (remainingSecs > 0) {
                    setRemainingSecs(remainingSecs => remainingSecs - 1)
                } else {
                    nextQuestion()
                }
            }, 1000);
        } else if (!isStart && remainingSecs !== 0) {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [isStart, remainingSecs])

    const colors = ['#2471a9', '#23989d', '#f09f41', '#dc4e6a']
    return (
        <>
            <StatusBar barStyle='light-content'></StatusBar>
            <View style={styles.styleView1}>
                <Text style={{ color: 'white' }}>{`${numberQuestion}/${questions.length}`}</Text>
                <View style={styles.progressBar}>
                    <View style={[styles.loadingStyle, { width: `${secs * 10}%` }]} />
                </View>
            </View>
            <View style={styles.styleView2}>
                <View style={styles.styleQuestionView}>
                    <Text style={styles.questionText}>{questions[numberQuestion - 1].content}</Text>
                </View>
                <View style={styles.styleAnswerView}>
                    <FlatList
                        style={styles.styleFlatList}
                        data={questions[numberQuestion - 1].answers}
                        renderItem={({ item, index }) =>
                            <TouchableOpacity
                                style={[{ backgroundColor: `${colors[index]}`, }, styles.styleAnswer]}
                                onPress={() => this.changeQuestion(index)}
                            >
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        fontSize: 16
                                    }}>
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        }
                    ></FlatList>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    styleView1: {
        flex: 0.05,
        backgroundColor: '#0e0e0e',
        flexDirection: 'row',
        padding: 5,
        paddingRight: 10,
        paddingTop: 44,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    styleView2: {
        flex: 0.95,
        backgroundColor: 'purple',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    progressBar: {
        width: '90%',
        height: 15,
        backgroundColor: 'white',
        borderRadius: 7.5
    },
    loadingStyle: {
        backgroundColor: 'yellow',
        width: '50%',
        height: '100%',
        borderRadius: 7.5
    },
    styleQuestionView: {
        backgroundColor: '#200c1c',
        padding: 20,
        flex: 3 / 5,
        justifyContent: 'center'
    },
    styleAnswerView: {
        flex: 2/5,
        backgroundColor: 'pink'
    },
    styleFlatList: {
        
    },
    questionText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '400',
        fontSize: 18,
    },
    styleAnswer: {
        padding: 20,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5
    }
})

export default QuizScreen;