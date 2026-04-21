import { useMemo, useState } from 'react';
import { FiDownload, FiEye, FiFileText, FiFolder, FiPlus, FiTrash2 } from 'react-icons/fi';
import AdminPageHeader from '../../components/admin/AdminPageHeader';
import AdminField from '../../components/admin/AdminField';
import ButtonWithIcon from '../../components/buttons/ButtonWithIcon';
import Card from '../../components/teachers/Card';
import './ManageResources.css';
import { useNavigate } from 'react-router-dom';

const resourceItems = [
  {
    id: 'res-001',
    title: 'Week 1 - Introduction to React',
    course: 'Web Development',
    type: 'Lecture Notes',
    status: 'Published',
    size: '2.4 MB',
    uploadedAt: 'Apr 1, 2026',
    downloads: 28,
    format: 'PDF',
    kind: 'file',
  },
  {
    id: 'res-002',
    title: 'JavaScript ES6+ Cheat Sheet',
    course: 'Advanced JavaScript',
    type: 'Cheat Sheet',
    status: 'Published',
    size: '1.2 MB',
    uploadedAt: 'Apr 3, 2026',
    downloads: 22,
    format: 'PDF',
    kind: 'file',
  },
  {
    id: 'res-003',
    title: 'React Hooks Complete Guide',
    course: 'React Fundamentals',
    type: 'Guide',
    status: 'Draft',
    size: '3.8 MB',
    uploadedAt: 'Apr 5, 2026',
    downloads: 25,
    format: 'PDF',
    kind: 'file',
  },
  {
    id: 'res-004',
    title: 'Assignment 1 - Starter Code',
    course: 'Web Development',
    type: 'Assignment',
    status: 'Published',
    size: '156 KB',
    uploadedAt: 'Apr 7, 2026',
    downloads: 28,
    format: 'ZIP',
    kind: 'folder',
  },
  {
    id: 'res-005',
    title: 'Lecture Slides - Async Programming',
    course: 'Advanced JavaScript',
    type: 'Slides',
    status: 'Archived',
    size: '4.2 MB',
    uploadedAt: 'Apr 8, 2026',
    downloads: 20,
    format: 'PPTX',
    kind: 'file',
  },
  {
    id: 'res-006',
    title: 'Redux Tutorial Documentation',
    course: 'React Fundamentals',
    type: 'Guide',
    status: 'Published',
    size: '2.1 MB',
    uploadedAt: 'Apr 9, 2026',
    downloads: 18,
    format: 'PDF',
    kind: 'file',
  },
];

const typeOptions = [
  { value: 'All Types', label: 'All Types' },
  { value: 'Lecture Notes', label: 'Lecture Notes' },
  { value: 'Cheat Sheet', label: 'Cheat Sheet' },
  { value: 'Guide', label: 'Guide' },
  { value: 'Assignment', label: 'Assignment' },
  { value: 'Slides', label: 'Slides' },
];

const statusOptions = [
  { value: 'All Statuses', label: 'All Statuses' },
  { value: 'Published', label: 'Published' },
  { value: 'Draft', label: 'Draft' },
  { value: 'Archived', label: 'Archived' },
];

function ManageResources() {
  const [filters, setFilters] = useState({
    search: '',
    type: 'All Types',
    status: 'All Statuses',
  });

  const [resources, setResources] = useState(resourceItems);
  const navigate = useNavigate()

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const matchesSearch =
        resource.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        resource.course.toLowerCase().includes(filters.search.toLowerCase());

      const matchesType = filters.type === 'All Types' || resource.type === filters.type;
      const matchesStatus = filters.status === 'All Statuses' || resource.status === filters.status;

      return matchesSearch && matchesType && matchesStatus;
    });
  }, [filters, resources]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleCreateResource = () => {
  //   const nextResource = {
  //     id: `res-${Date.now()}`,
  //     title: `New Resource ${resources.length + 1}`,
  //     course: 'Web Development',
  //     type: 'Lecture Notes',
  //     status: 'Draft',
  //     size: '0.8 MB',
  //     uploadedAt: 'Apr 16, 2026',
  //     downloads: 0,
  //     format: 'PDF',
  //     kind: 'file',
  //   };

  //   setResources((prev) => [nextResource, ...prev]);
  // };

  function handleCreate(){
    navigate('/teachers/resources/create')
  }

  const handleDelete = (resourceId) => {
    setResources((prev) => prev.filter((resource) => resource.id !== resourceId));
  };

  return (
    <div className="manage-resources-page">
      <div className="manage-resources-page-top">
        <AdminPageHeader
          title="Manage Resources"
          subtitle="Review, filter and manage resources"
          actions={(
            <div className="manage-resources-header-action">
              <ButtonWithIcon
                name="Create Resource"
                buttonIcon={<FiPlus />}
                onClick={handleCreate}
                styles={{ backgroundColor: '#E8622A', color: '#FFFFFF' }}
              />
            </div>
          )}
        />
      </div>
      <div className="manage-resources-page-bottom">

        <Card className={'eeee'}>
          <div className="manage-resources-card">
            <div className="manage-resources-filters">
              <AdminField
                id="search"
                label="Search"
                placeholder="Search Students"
                value={filters.search}
                onChange={handleChange}
                className="manage-resources-filter"
              />
              <AdminField
                id="type"
                label="Assessment Type"
                type="select"
                value={filters.type}
                onChange={handleChange}
                options={typeOptions}
                className="manage-resources-filter"
              />
              <AdminField
                id="status"
                label="Status"
                type="select"
                value={filters.status}
                onChange={handleChange}
                options={statusOptions}
                className="manage-resources-filter"
              />
            </div>

            <div className="manage-resources-list">
              {filteredResources.length ? (
                filteredResources.map((resource) => (
                  <article key={resource.id} className="resource-item-card">
                    <div className="resource-item-main">
                      <div className={`resource-item-icon ${resource.kind === 'folder' ? 'folder' : 'file'}`}>
                        {resource.kind === 'folder' ? <FiFolder /> : <FiFileText />}
                      </div>

                      <div className="resource-item-copy">
                        <div className="resource-item-title-row">
                          <div>
                            <h3>{resource.title}</h3>
                            <p>{resource.course}</p>
                          </div>
                          <span className="resource-format-badge">{resource.format}</span>
                        </div>

                        <div className="resource-item-meta">
                          <span>Size: {resource.size}</span>
                          <span>Uploaded: {resource.uploadedAt}</span>
                          <span>{resource.downloads} downloads</span>
                        </div>

                        <div className="resource-item-actions">
                          <button type="button" className="resource-action download">
                            <FiDownload />
                            Download
                          </button>
                          <button type="button" className="resource-action preview">
                            <FiEye />
                            Preview
                          </button>
                          <button
                            type="button"
                            className="resource-action delete"
                            onClick={() => handleDelete(resource.id)}
                          >
                            <FiTrash2 />
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))
              ) : (
                <div className="resources-empty-state">
                  <h3>No resources found</h3>
                  <p>Try updating the search term or adjusting the filters.</p>
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>

    </div>
  );
}

export default ManageResources;
