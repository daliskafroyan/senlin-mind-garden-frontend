import React from 'react';
import {
    Timeline,
    Text,
    Badge,
    Box,
    ColorSwatch,
    Card,
    Accordion,
    createStyles,
} from '@mantine/core';
import { Note } from '../../../pages';

const useStyles = createStyles((_theme, _params, getRef) => {
    const controlRef = getRef('control');
    return {
        control: {
            ref: controlRef,
            border: 0,
            opacity: 0.6,
            color: 'black',

            '&:hover': {
                backgroundColor: 'transparent',
                opacity: 1,
            },
        },
    };
});

const TimelineCard: React.VoidFunctionComponent<{ data: Note[] }> = ({
    data,
}) => {
    const { classes } = useStyles();

    return (
        <Timeline active={1} bulletSize={24} lineWidth={2}>
            {data.map((note: Note) => (
                <Timeline.Item key={note.id}>
                    <Card
                        padding='md'
                        withBorder
                        style={{ marginTop: '0.75rem' }}
                    >
                        <Box>
                            <ColorSwatch
                                color={'red'}
                                size={10}
                                style={{ marginBottom: '0.2rem' }}
                            />
                            <Text weight={'bold'} size={'xl'}>
                                {note.title}
                            </Text>
                            <Badge
                                color='red'
                                radius='xs'
                                variant='filled'
                                size='sm'
                            >
                                {note.tag}
                            </Badge>
                            <Box
                                style={{
                                    display: 'inline-block',
                                    marginLeft: '0.5rem',
                                }}
                            >
                                <Text color='dimmed' size='sm'>
                                    of{' '}
                                    <Text
                                        variant='link'
                                        component='span'
                                        inherit
                                    >
                                        {note.specificTag}
                                    </Text>{' '}
                                    from{' '}
                                    <Text
                                        variant='link'
                                        component='span'
                                        inherit
                                    >
                                        {note.source}
                                    </Text>{' '}
                                    by{' '}
                                    <Text
                                        variant='link'
                                        component='span'
                                        inherit
                                    >
                                        {note.author}
                                    </Text>
                                </Text>
                            </Box>
                        </Box>
                        <Accordion
                            classNames={classes}
                            style={{ marginTop: '1rem' }}
                            styles={{
                                item: { border: 0 },
                                itemOpened: { border: 0 },
                                control: { padding: 0 },
                                contentInner: { padding: 0 },
                            }}
                            iconPosition='right'
                            multiple
                        >
                            <Accordion.Item label='Customization'>
                                <Text color='' size='sm'>
                                    You&apos;ve created new branch{' '}
                                    <Text
                                        variant='link'
                                        component='span'
                                        inherit
                                    >
                                        fix-notifications
                                    </Text>{' '}
                                    from master
                                </Text>
                            </Accordion.Item>
                        </Accordion>
                    </Card>
                </Timeline.Item>
            ))}
        </Timeline>
    );
};

export default TimelineCard;
