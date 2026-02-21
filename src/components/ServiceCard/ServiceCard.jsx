import React from 'react';
import { ArrowRight } from 'lucide-react';
import './ServiceCard.css';

const ServiceCard = ({ title, description, icon: Icon, image, linkText }) => {
    return (
        <div className="service-card group">
            <div className="card-image-wrapper">
                <img src={image} alt={title} className="card-image" />
                <div className="card-overlay"></div>
                <div className="card-icon-float">
                    <Icon size={32} />
                </div>
            </div>
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-desc">{description}</p>
                <div className="card-footer">
                    <span className="btn btn-outline btn-sm w-full justification-center">
                        {linkText} <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
