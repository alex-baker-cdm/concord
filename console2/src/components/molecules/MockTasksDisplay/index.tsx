/*-
 * *****
 * Concord
 * -----
 * Copyright (C) 2017 - 2018 Walmart Inc.
 * -----
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =====
 */

import * as React from 'react';
import { Label, Popup, List } from 'semantic-ui-react';
import { MockDefinitionEntry } from '../../../api/process';

interface MockTasksDisplayProps {
    mocks?: MockDefinitionEntry[];
}

const MockTasksDisplay = ({ mocks }: MockTasksDisplayProps) => {
    if (!mocks || mocks.length === 0) {
        return null;
    }

    const renderMocksList = () => (
        <List>
            {mocks.map((mock, index) => (
                <List.Item key={index}>
                    <List.Content>
                        <List.Header>{mock.task}</List.Header>
                        {mock.method && <List.Description>Method: {mock.method}</List.Description>}
                        {mock.stepName && <List.Description>Step: {mock.stepName}</List.Description>}
                    </List.Content>
                </List.Item>
            ))}
        </List>
    );

    return (
        <Popup
            trigger={
                <Label color="blue" size="small">
                    MOCKED ({mocks.length})
                </Label>
            }
            content={
                <div>
                    <div style={{ marginBottom: '8px' }}>
                        <strong>Mocked Tasks:</strong>
                    </div>
                    {renderMocksList()}
                </div>
            }
            inverted={true}
            position="top center"
            wide="very"
        />
    );
};

export default MockTasksDisplay;
