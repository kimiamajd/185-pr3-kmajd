import React from 'react';
import '../TableTab.css';

function TableTab() {
    return (
        <div>
        <h1>Harry Potter Series Information</h1>
        <table>
        <thead>
            <th>Title</th>
            <th>Year Published</th>
            <th>Link to purchase</th>
        </thead>
        <tbody>
        <tr>
            <td>Harry Potter and the Sorcerer's Stone</td>
            <td>1997</td>
            <td><a href = "https://www.amazon.com/Harry-Potter-Sorcerers-Stone-Rowling/dp/0590353403"> Buy now </a> </td>
        </tr>
        <tr>
            <td>Harry Potter and the Chamber of Secrets</td>
            <td>1998</td>
            <td><a href = "https://www.amazon.com/Harry-Potter-Chamber-Secrets-Rowling/dp/0439064872/ref=pd_sbs_1?pd_rd_w=ZrNDg&pf_rd_p=c52600a3-624a-4791-b4c4-3b112e19fbbc&pf_rd_r=C92Q4ET4C0NHY46VXYF0&pd_rd_r=46924ac7-485c-491b-9f54-6d0cc5dac48d&pd_rd_wg=jW1zw&pd_rd_i=0439064872&psc=1"> Buy now </a>  </td>
        </tr>
        <tr>
            <td>Harry Potter and the Prisoner of Azkaban</td>
            <td>1999</td>
            <td><a href = "https://www.amazon.com/Harry-Potter-Prisoner-Azkaban-Rowling/dp/0439136369/ref=pd_sbs_1?pd_rd_w=hxzZJ&pf_rd_p=c52600a3-624a-4791-b4c4-3b112e19fbbc&pf_rd_r=2ENSKCS7SXA8FAQ9V1VB&pd_rd_r=8e946fbb-a3b6-405d-85c3-bf80fa417637&pd_rd_wg=Nms1S&pd_rd_i=0439136369&psc=1" > Buy now</a> </td>
        </tr>
        <tr>
            <td>Harry Potter and the Goblet of Fire</td>
            <td>2000</td>
            <td><a href = "https://www.amazon.com/Harry-Potter-Goblet-Fire-Rowling/dp/0439139600/ref=pd_sim_nf_3?pd_rd_w=YljTk&pf_rd_p=90765e8c-a52e-4c61-b338-0577ef37d819&pf_rd_r=DBW8JVXQ06M458SJP9FT&pd_rd_r=5fada3ff-d85a-4f81-b1fa-94ed2da4737a&pd_rd_wg=D0hJX&pd_rd_i=0439139600&psc=1>" >Buy now</a> </td>
        </tr>
        <tr>
            <td>Harry Potter and the Order of the Pheonix</td>
            <td>2003</td>
            <td><a href = "https://www.amazon.com/Harry-Potter-Order-Phoenix-Rowling/dp/0439358078/ref=pd_sbs_3?pd_rd_w=s2zff&pf_rd_p=c52600a3-624a-4791-b4c4-3b112e19fbbc&pf_rd_r=N2ERHJK3N6X644JTJMV7&pd_rd_r=25016535-ae46-490b-92a9-1b4baed14cae&pd_rd_wg=imwFW&pd_rd_i=0439358078&psc=1">Buy now</a></td>
        </tr>
        <tr>
            <td>Harry Potter and the Half Blood Prince</td>
            <td>2005</td>
            <td><a href = "https://www.amazon.com/Harry-Potter-Half-Blood-Prince-Book/dp/0439785960/ref=pd_sim_nf_1?pd_rd_w=wLRw8&pf_rd_p=90765e8c-a52e-4c61-b338-0577ef37d819&pf_rd_r=HT144DTX5K8YYNH4SPJD&pd_rd_r=595d571f-c447-4755-8d7d-a42a6b1ab696&pd_rd_wg=n1L0g&pd_rd_i=0439785960&psc=1" > Buy now</a> </td>
        </tr>
        <tr>
            <td>Harry Potter and the Deathly Hallows</td>
            <td>2007</td>
            <td><a href = "https://www.amazon.com/Harry-Potter-Deathly-Hallows-Book/dp/0545139708/ref=pd_sbs_2?pd_rd_w=Bt0KU&pf_rd_p=c52600a3-624a-4791-b4c4-3b112e19fbbc&pf_rd_r=CASCREH3E48Y5378SETD&pd_rd_r=e85dcfb9-46b4-4ad1-bee1-387fc2646f14&pd_rd_wg=Xb6tx&pd_rd_i=0545139708&psc=1" > Buy now</a></td>
          </tr>
          </tbody>
      </table>
      </div>
    )
}

export default TableTab;