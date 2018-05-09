import React from 'react';
import styles from './hero.module.css';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


export default ({ person }) => (
    <Card>
        <CardHeader
            title="URL Avatar"
            subtitle="Subtitle"
            avatar="images/jsa-128.jpg"
        />
        <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
            <img src={`${person.node.image.file.url}?w=1180&h=600&fit=pad&bg=rgb:000000`} alt="" />
        </CardMedia>
        <CardTitle title="Card title" subtitle="Card subtitle" />
        <CardText>
            <h3 className={styles.heroHeadline}>{person.node.name}</h3>
            <p className={styles.heroTitle}>{person.node.phone}</p>
            <p className={styles.heroTitle}>{person.node.title}</p>
            <p>{person.node.shortBio.shortBio}</p>
        </CardText>
        <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
        </CardActions>
    </Card>
)
{/*<div className={styles.hero}>*/}

{/*<img*/}
{/*className={styles.heroImage}*/}
{/*src={`${person.node.image.file.url}?w=1180&h=600&fit=pad&bg=rgb:000000`}*/}
{/*alt=""*/}
{/*/>*/}

{/*<div className={styles.heroDetails}>*/}
{/*<h3 className={styles.heroHeadline}>{person.node.name}</h3>*/}
{/*<p className={styles.heroTitle}>{person.node.title}</p>*/}
{/*<p className={styles.heroTitle}>{person.node.title}</p>*/}
{/*<p className={styles.heroTitle}>{person.node.phone}</p>*/}
{/*<p className={styles.heroTitle}>{person.node.title}</p>*/}
{/*<p>{person.node.shortBio.shortBio}</p>*/}

{/*</div>*/}
// </div>