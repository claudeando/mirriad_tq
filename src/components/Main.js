import Data from '../data.json';

function Main() {
    return (
        <div role="rows">
            {
                Data && Data.content.map((datum) =>
                    <tr>
                        <td>{datum.id}</td>
                        <td>{datum.image}</td>
                        <td>{datum.name}</td>
                        <td>{datum.audienceType}</td>
                        <td>{datum.status}</td>

                        <td>
                            {
                                datum.organisation !== null &&
                                <>
                                    <td>{datum.organisation.id}</td>
                                    <td>{datum.organisation.name}</td>
                                </>
                            }
                        </td>

                        <td>{datum.region}</td>
                        <td>{datum.campaignId}</td>
                        <td>{datum.campaignName}</td>

                        <td>
                            {
                                datum.watchers !== null && datum.watchers.length > 0 && datum.watchers.map((watcher) => {
                                    return <>{watcher}</>
                                }
                                )}
                        </td>

                        <td>{datum.dueDate}</td>
                        <td>{datum.lastModifiedDate}</td>
                        <td>{datum.lastModifiedBy}</td>
                        <td>{datum.createdDate}</td>
                        <td>{datum.createdBy}</td>

                        {<td>
                            {
                                datum.comments !== null && datum.comments.length > 0 && datum.comments.map((comment) => {
                                    return (
                                        <>
                                            <td>{comment.id}</td>
                                            <td>{comment.text}</td>
                                            <td>{comment.createdDate}</td>
                                            <td>{comment.createdBy}</td>
                                        </>
                                    )
                                }
                                )}
                        </td>}

                        <td>{datum.type}</td>
                        <td>{datum.workOrderId}</td>
                        <td>{datum.sceneCount}</td>
                    </tr>
                )
            }
        </div>
    )
}

export default Main;